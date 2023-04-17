function boldFirstHalf(text) {
    let words = text.split(' ');
    let result = words.map((word) => {
      let halfLength = Math.floor(word.length / 2);
      let firstHalf = word.slice(0, halfLength);
      let secondHalf = word.slice(halfLength);
      return `<strong>${firstHalf}</strong>${secondHalf}`;
    });
  
    return result.join(' ');
  }
  
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      let newNode = document.createElement('span');
      newNode.innerHTML = boldFirstHalf(node.textContent);
      node.replaceWith(newNode);
    } else {
      node.childNodes.forEach(processNode);
    }
  }
  alert("Happy reading! If you want to deactivate the bold, just refresh the page.");
  processNode(document.body);
  