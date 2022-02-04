import requests
import json
import sys
from bs4 import BeautifulSoup

def main(URL):
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, "html.parser")

    results = soup.find_all("div", {"class": "game_cell"})
    games = []

    for res in results:
        # print(res.prettify())
        img = res.find("div", {"class":"game_thumb"})
        title = res.find("div", {"class":"game_title"})
        author = res.find("div", {"class":"game_author"})
        game_link = res.find("a", {"class":"game_link"})

        img_url = img.get('data-background_image')
        game_link_url = game_link.get('href')
        title_string = title.string
        author_string = author.string

        game = {
            'img': img_url,
            'game_link': game_link_url,
            'title': title_string,
            'author': author_string
        }

        games.append(game)

    json_string = json.dumps({'games': games}, indent=2)

    fName = URL[URL.rfind('/')+1:]
    with open('{0}.json'.format(fName), 'w') as outfile:
        outfile.write(json_string)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print('Incorrect usage: python3 webscraper.py <url>')
        exit(2)
    main(sys.argv[1])