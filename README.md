# Test

Test environment for react web app.

## Deployment

Website is deployed at [https://kat-kel.github.io/lostma-website-test/](https://kat-kel.github.io/lostma-website-test/).

## Testing Environment

1. Check your version of `node`. (22 or >22)

    ```shell
    npm update -g npm
    ```

2. Check your version of `npm`. (10 or >10)

    ```shell
    nvm install node
    ```

3. Change into the [`docs`]() directory and install the app's dependencies.

    ```shell
    npm install
    ```

4. Run the app to test its development environment.

    ```shell
    npm run start
    ```

## Updating Information

3 types of information need to be able to be updated easily and without knowledge of the website's JavaScript and/or internal React architecture.

|Information|JSON Location|
|--|--|
|Team / Collaborators|[`src/data/people.json`](src/data/people.json)|
|News|[`src/data/feed.json`](src/data/feed.json)|
|Data model|[`src/data/recordTypes.json`](src/data/recordTypes.json)|

### People

Update the names of team members and collaborators directly in the JSON file.

```json
{
    "forename": "Philippe de",
    "surname": "Vitry",
    "role": "Troubadour"
}
```

The JSON file has 2 key-value pairs: `Team`, `Collaborators`. The value of each is an array of people that can be added in any order. The website's JavaScript orders the array alphabetically by surname. When a person's last name is preceded by a particle (i.e. 'de', 'van'), which should not be part of the alphabetisation, add it to the end of the forename field.

### News

Update the news feed JSON file.

```json
[
    {
        "key": "article", 
        "date": "2024-12-04", 
        "title": "Title of post", 
        "body": "Body of post",
        "link": "https://www.google.com"
    }
]
```

The website's JavaScript orders the array alphabetically by date, so you can add them in any order you want.

The body of the post can contain HTML, but it's best to try sticking to simple text. Images are not currently supported.

All posts will be given an icon indicating what kind of information they present. As the value of `key`, provide one of the following (lowercase):

- `article`
- `conference`
- `dataset`
- `meeting`
- `talk`

### Data model

Unlike the other information, do not update the data model by manually editing the JSON.

Re-run the [`heurist-api`](https://github.com/LostMa-ERC/heurist-api) CLI tool, developped for the LostMa project, which will freshly export the architecture of the database in a JSON format.

1. Install and set up the tool. (Follow instructions)

2. Run the `doc` subcommand.

    ```console
    $ heurist --database DATABASE --login USERNAME --password PASSWORD doc --output-type json --outdir ./src/data/
    ```

## Updating Deployment

If information JSON files have been updated:

1. Make sure you're working with the most up-to-date version of the web application's repository with `git pull`.

2. Commit and push the updated JSON files to the repository.

3. If your terminal is not at the root of `./docs`, change to that directory.

4. From `./docs`, run `npm run predeploy` to tell Node to generate new static files in the `./build` folder. Don't manually edit anything in that folder; let Node do it via the `predeploy` script.

5. Finally, run `npm run deploy` to commit and push the build's files to the remote repository's `gh-pages` branch. Again, don't manually mess with the `gh-pages` branch. Let the project's scripts manage it.

6. Check the deployment's success in the Actions tab / automated workflows page of the GitHub repository online. Locally, `npm run deploy` should have triggered a push that GitHub will show as a `pages build and deployment` action.

When it's done, the website should have the new information. Confirm at the depolyment's URL.
