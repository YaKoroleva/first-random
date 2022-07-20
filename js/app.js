// const headerCreateTaskThroughNode = document.getElementById("header_create_task_through");
// const headerCreateTaskThrough1Node = document.getElementById("header_create_task_through1");
// const rectangleNode = document.getElementById("rectangle");

// function hoverOnCreateTask(){
//   rectangleNode.classList.add("active");
//   headerCreateTaskThroughNode.style.opacity = 1;
//   headerCreateTaskThrough1Node.style.opacity = 1;
// }


// function hoverOffCreateTask (){
//   setTimeout(function(){
//     rectangleNode.classList.remove("active");
//     //document.getElementById("rectangle").classList.add("rectangle");
//     headerCreateTaskThroughNode.style.opacity = 0;
//     headerCreateTaskThrough1Node.style.opacity = 0;
//   }, 2000);
// }

// /*function lineReduction(){
//   document.getElementById("rectangle").classList.add("passive");
// }*/

// const gsap = window.gsap;

// gsap.defaults({
// 	duration: 0.5,
// });

const headerCreateTaskNode = document.querySelector('.header__create-task');
const headerCreateTaskThroughNodes = document.querySelectorAll('.header__create-task-through');
const rectangleNode = document.querySelector(".rectangle");

headerCreateTaskNode.addEventListener('mouseenter', hoverOnTask);
headerCreateTaskNode.addEventListener('mouseleave', hoverOffTask);


function hoverOnTask() {
	const durationRectangleMilliseconds = getRectangleDuration(rectangleNode);

	headerCreateTaskNode.classList.add('header__create-task_active');

	setTimeout(() => {
		addOrRemoveClassToNodes(headerCreateTaskThroughNodes, 'header__create-task-through_active', true); // добавить css класс всем узлам headerCreateTaskThroughNodes
	}, durationRectangleMilliseconds); // запуска через durationRectangleMilliseconds

}



function hoverOffTask() {
	const durationRectangleMilliseconds = getRectangleDuration(rectangleNode);

	setTimeout(() => {
		addOrRemoveClassToNodes(headerCreateTaskThroughNodes, 'header__create-task-through_active', false);
		headerCreateTaskNode.classList.remove('header__create-task_active');
	}, durationRectangleMilliseconds * 2);
}



function addOrRemoveClassToNodes(nodes, cssClass, onOrOff) {
	for (const node of nodes) {
		if (onOrOff === true) {
			node.classList.add(cssClass);
		} else {
			node.classList.remove(cssClass);
		}
	}
}



function getRectangleDuration(rectangleNode) {
	const durationRectangleStr = window.getComputedStyle(rectangleNode).transitionDuration;
	const durationRectangleSeconds = Number(durationRectangleStr.slice(0, durationRectangleStr.length - 1));
	const durationRectangleMilliseconds = durationRectangleSeconds * 1000;

	return durationRectangleMilliseconds;
}

// function active() {
//   addOrRemoveClassToNodes(headerCreateTaskThroughNodes, 'header__create-task-through_active', true);
//   headerCreateTaskNode.classList.add('header__create-task_active');
// }

// active();