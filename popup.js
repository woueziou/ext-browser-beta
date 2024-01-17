//  popup.js

// https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/popup/popup.js
// https://github.com/microsoft/MicrosoftEdge-Extensions/blob/main/Extension%20samples/extension-getting-started-part2/extension-getting-started-part2/content-scripts/content.js
/* The code is adding an event listener to the 'DOMContentLoaded' event, which is fired when the
initial HTML document has been completely loaded and parsed. */
document.addEventListener('DOMContentLoaded', () => {
    const buttonElement = document.getElementById('clickBtn');
    buttonElement.onclick = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { message: 'action_from_extension_ui' },
                function (response) {
                    console.log(response); // response is data sent back from the website 
                    window.close() // close the popup window after the message the action on the web site is done
                })
        });
        
    }
});