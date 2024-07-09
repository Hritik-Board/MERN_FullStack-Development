//step 1 - select the outer div using the ID

const parentNodeID = document.getElementById("outerDiv");

console.log(parentNodeID);

//navigate to the first child

const firstChildEle = parentNodeID.childNodes;

console.log(firstChildEle);

//Navigate to the second child which is the inner div

const innerDivEle = parentNodeID.childNodes[1];

console.log(innerDivEle);

const moreInnerDiv = innerDivEle.childNodes[0];

console.log(moreInnerDiv);
