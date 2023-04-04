function main() {
    let bookmarks = document.querySelectorAll('[role="article"]');
    let header = document.querySelector("div.header h4.heading");
    console.log("loaded");
    for (let bookmark of bookmarks) {
        console.log(bookmark);
        let lastChapter = bookmark.querySelector("dd.chapters")
        if (lastChapter !== null) {
            if (lastChapter.querySelector("a")) {
                let lastChapterURL = lastChapter.querySelector("a").href;
                console.log(lastChapterURL);
                header.querySelector("a").href = lastChapterURL;
            }
        } else {
            console.log("no chapter message, probably series")
        }
    }
}

main();