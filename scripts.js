/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"H1L3xeL7F5BBqIfl","label":"reddit","bookmarks":[{"id":"bErUdNTPZe4obAHM","label":"r/unixporn","url":"https://www.reddit.com/r/unixporn/"},{"id":"O6Cc595OEF7Voa19","label":"r/fingmemes","url":"https://www.reddit.com/r/FingMemes/"},{"id":"ORLrBifjiRTWNSWq","label":"r/linux","url":"https://www.reddit.com/r/linux/"},{"id":"fcee3XLMeD2Eqtoh","label":"r/anime","url":"https://www.reddit.com/r/anime/"}]},{"id":"1X1llL1pQERC28fa","label":"Github","bookmarks":[{"id":"UD8xWn0kdXIm7o6v","label":"Mine","url":"https://github.com/"},{"id":"wLdpTrW6zTxyn0Dd","label":"Astrovim","url":"https://github.com/AstroNvim/AstroNvim"},{"id":"4gUd3tHTsGjdHB9S","label":"DT","url":"https://gitlab.com/dwt1"},{"id":"HHQ9BIYTLaL2jFZc","label":"Luke smith","url":"https://github.com/LukeSmithxyz"}]},{"id":"DhuBEdqW6OqaZwPR","label":"Social","bookmarks":[{"id":"evNdhCV7HxkvR9UB","label":"Youtube","url":"https://www.youtube.com/"},{"id":"WoQSovlb8c68NJhV","label":"Whatsapp","url":"https://web.whatsapp.com/"},{"id":"SR42bjN5Zcvnbwf7","label":"Instagram","url":"https://instagram.com"}]},{"id":"OIG78adO6Qysdkve","label":"Study","bookmarks":[{"id":"accRzNR2IgK1ZWmO","label":"Cpp","url":"https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"},{"id":"Ge4AND6RSGm5mwFJ","label":"Bugs Writer","url":"https://www.youtube.com/channel/UCngn7SVujlvskHRvRKc1cTw"},{"id":"8YYQHafD8MEwBURG","label":"Luke Smith","url":"https://www.youtube.com/c/LukeSmithxyz"},{"id":"2QitKNOkQ4E3Tp8K","label":"Distro Tube","url":"https://www.youtube.com/c/DistroTube"}]},{"id":"2Tcro66EXm8jSasy","label":"CP","bookmarks":[{"id":"r2yOBejPEwFZFSFS","label":"Leet Code","url":"https://leetcode.com/"},{"id":"ylrwJFQPHGVyqDWr","label":"Code studio","url":"https://www.codingninjas.com/codestudio"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
