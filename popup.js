let activeTab = document.getElementById("applyBold");
activeTab.addEventListener("click", () => {
    if (activeTab.dataset.state == "bold"){
        activeTab.dataset.state = "normal";
        activeTab.innerText = "Apply Bold";
    }else{
        activeTab.dataset.state = "bold";
        activeTab.innerText = "Deactivate Bold";
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      });
    });
  });
  