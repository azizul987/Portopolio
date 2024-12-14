// Pilih elemen <a> dengan kelas 'trigger-link' dan elemen dengan kelas 'main'
const Menu1T = document.querySelector('.Menu1');
const Menu2T = document.querySelector('.Menu2');
const Menu3T = document.querySelector('.Menu3');
const Menu4T = document.querySelector('.Menu4');
const Menu5T = document.querySelector('.Menu5');
const Menu6T = document.querySelector('.Menu6');
const Judul = document.querySelector('.Menu');
const Isi = document.querySelector('.Isi');

// Tambahkan event listener untuk 'click' pada link
Menu1T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "About Me"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `Hello, I'm Azizul, an AI enthusiast<br>
                     focused on advancing my skills in <br>
                     Artificial Intelligence. My portfolio<br>
                     features various AI-driven projects,<br>
                     including predictive modeling, sentiment<br>
                     analysis, and computer vision<br>
                     applications. I am passionate about<br>
                     leveraging AI to create innovative<br>
                     solutions and continuously developing<br>
                     my expertise in this dynamic field.<br>
                     Thank you for visiting!`;
});
Menu2T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "About Me"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `Hello, I'm Azizul, an AI enthusiast<br>
                     focused on advancing my skills in <br>
                     Artificial Intelligence. My portfolio<br>
                     features various AI-driven projects,<br>
                     including predictive modeling, sentiment<br>
                     analysis, and computer vision<br>
                     applications. I am passionate about<br>
                     leveraging AI to create innovative<br>
                     solutions and continuously developing<br>
                     my expertise in this dynamic field.<br>
                     Thank you for visiting!`;
});
Menu3T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "Education"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `Bachelor of Science in Computer Engineering<br>
                     Sriwijaya Universiy, [Indralaya, Indonesia]<br>
                     Expected Graduation: [Juny,2028]<br>
                     Currently enrolled in Semester 1<br>
                     Relevant coursework:-`;
});
Menu4T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "Experience"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `<ul>
                     <li><b>-</li>
                     </ul>`;
}); 
Menu5T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "Project"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `<ul>
                     <li><b>Critical blue</li>
                     <li><b>-</li>
                     </ul>`;
}); 
Menu6T.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link melakukan navigasi
    Judul.textContent = "Contact"; // Mengubah teks pada elemen Judul
    
    // Mengubah teks pada elemen Isi dengan baris baru menggunakan <br>
    Isi.innerHTML = `Email: azizul@example.com<br>
                     LinkedIn: linkedin.com/in/yourprofile<br>
                     GitHub: github.com/azizul987<br>
                     Phone: +123-456-7890<br>
                     Feel free to reach out for collaborations or inquiries!`;
}); 
