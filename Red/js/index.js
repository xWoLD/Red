'use strict'

const regionDiv = document.getElementsByClassName('filter-tab-option')[0]
let regions;

fetch('https://api.real-estate-manager.redberryinternship.ge/api/regions')
.then(response => response.json())
.then(data => {
    regions = data
   
    regions.forEach(el => {
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        const p = document.createElement('p');
        const textNode = document.createTextNode(el.name);
        p.appendChild(textNode);

        const parent = document.createElement('div')
        parent.classList.add('option')
        parent.appendChild(input)
        parent.appendChild(p)
        
        regionDiv.appendChild(parent);
    });
})

