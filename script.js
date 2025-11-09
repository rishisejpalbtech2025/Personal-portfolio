// small helper for footer year & mobile menu
document.addEventListener('DOMContentLoaded', ()=>{
const y = new Date().getFullYear();
document.getElementById('year')?.textContent = y;
document.getElementById('year2')?.textContent = y;
document.getElementById('year3')?.textContent = y;


const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(toggle && links){
toggle.addEventListener('click', ()=>{
links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
links.style.flexDirection = 'column';
links.style.gap = '12px';
links.style.background = 'transparent';
links.style.padding = '12px';
links.style.position = 'absolute';
links.style.right = '28px';
links.style.top = '56px';
links.style.borderRadius = '10px';
links.style.backdropFilter = 'blur(6px)';
});
}
});
