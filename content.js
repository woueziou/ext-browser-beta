
/* The `chrome.runtime.onMessage.addListener()` function is used to listen for messages sent from other
parts of the Chrome extension, 
such as the popup or background script. */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    /* The `if` statement is checking if the `message` property of the `request` object is equal to the
    string "action_from_extension_ui". If it is, then the code inside the `if` block will be
    executed. */
    if (request.message == "action_from_extension_ui") {
        alert("Message from Popup action button");
        // Add your dom modification here
        sendResponse({ fromcontent: "Done" }); // We send response back to our extension UI to update it when needed
    }
});