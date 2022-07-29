let ticks = document.querySelector('#ticks');
let disease = document.querySelector('#disease');
let prevention = document.querySelector('#prevention');
let treatments = document.querySelector('#treatments');
let resources = document.querySelector('#resources');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let area3 = document.querySelector('#area3');


ticks.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="ticks.html" width="90%" height="95%"></embed>'
	//ticks.innerHTML = '<li><button class="list active" id="ticks">ticks</button></li>'
	ticks.classList.add('active')
	disease.classList.remove('active')
	prevention.classList.remove('active')
	treatments.classList.remove('active')
	resources.classList.remove('active')
	about.classList.remove('active')
	contact.classList.remove('active')
});

disease.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="disease.html" width="90%" height="95%"></embed>'
	//disease.innerHTML = '<li><button class="list active" id="disease">disease</button></li>'
	ticks.classList.remove('active')
	disease.classList.add('active')
	prevention.classList.remove('active')
	treatments.classList.remove('active')
	resources.classList.remove('active')
	about.classList.remove('active')
	contact.classList.remove('active')
});

prevention.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="prevention.html" width="90%" height="95%"></embed>'
	//prevention.innerHTML = '<li><button class="list active" id="prevention">prevention</button></li>'
	ticks.classList.remove('active')
	disease.classList.remove('active')
	prevention.classList.add('active')
	treatments.classList.remove('active')
	resources.classList.remove('active')
	about.classList.remove('active')
	contact.classList.remove('active')
});

treatments.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="treatments.html" width="90%" height="95%"></embed>'
	//treatments.innerHTML = '<li><button class="list active" id="treatments">treatments</button></li>'
	ticks.classList.remove('active')
	disease.classList.remove('active')
	prevention.classList.remove('active')
	treatments.classList.add('active')
	resources.classList.remove('active')
	about.classList.remove('active')
	contact.classList.remove('active')
});

resources.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="resources.html" width="90%" height="95%"></embed>'
	//resources.innerHTML = '<li><button class="list active" id="resources">resources</button></li>'
	ticks.classList.remove('active')
	disease.classList.remove('active')
	prevention.classList.remove('active')
	treatments.classList.remove('active')
	resources.classList.add('active')
	about.classList.remove('active')
	contact.classList.remove('active')
});

about.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="about.html" width="90%" height="95%"></embed>'
	//about.innerHTML = '<li><button class="list active" id="about">about</button></li>'
	ticks.classList.remove('active')
	disease.classList.remove('active')
	prevention.classList.remove('active')
	treatments.classList.remove('active')
	resources.classList.remove('active')
	about.classList.add('active')
	contact.classList.remove('active')
});

contact.addEventListener('click', () => {
	area3.innerHTML = '<embed id="content" type="text/html" src="contact.html" width="90%" height="95%"></embed>'
	//contact.innerHTML = '<li><button class="list active" id="contact">contact</button></li>'
	ticks.classList.remove('active')
	disease.classList.remove('active')
	prevention.classList.remove('active')
	treatments.classList.remove('active')
	resources.classList.remove('active')
	about.classList.remove('active')
	contact.classList.add('active')
});

