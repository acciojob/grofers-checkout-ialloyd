const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const price=document.querySelectorAll('.price');
const table=document.querySelector('table')
const lastRow=document.createElement('tr');
const total=document.createElement('td');
const totalprice=document.createElement('td');
let sum=0;
price.forEach((item)=>sum+=Number(item.textContent))
	
	total.textContent='total';
    totalprice.textContent=sum;
	lastRow.appendChild(total);
	lastRow.id='ans'
	lastRow.appendChild(totalprice);
	table.appendChild(lastRow);
	
};

getSumBtn.addEventListener("click", getSum);

