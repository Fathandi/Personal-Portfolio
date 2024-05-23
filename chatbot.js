function jawabPertanyaan() {
    const inputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-messages');
    const pertanyaan = inputField.value.trim();
    const pertanyaanLower = pertanyaan.toLowerCase();

    if (pertanyaan === '') {
        return;
    }

    let jawaban = '';

    if (
        pertanyaanLower.includes("nama") &&
        pertanyaanLower.includes("lengkap") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Nama lengkap Fathih adalah Fathih Apriandi. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("siapa") &&
        pertanyaanLower.includes("fathih") &&
        pertanyaanLower.includes("apriandi")) {
        jawaban = "Fathih Apriandi hanyalah seorang programmer SMA yang kebetulan lewat. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("siapa") &&
        pertanyaanLower.includes("apriandi")) {
        jawaban = "Fathih Apriandi hanyalah seorang programmer SMA yang kebetulan lewat. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kapan") &&
        pertanyaanLower.includes("tanggal") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tanggal lahir Fathih adalah 21 April 2007. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("di") &&
        pertanyaanLower.includes("mana") &&
        pertanyaanLower.includes("tempat") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tempat lahir Fathih adalah Tangerang. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("hobi") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Hobi Fathih adalah bermain video game. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("olahraga") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Olahraga yang dilakukan Fathih adalah berlatih gulat tangan dan membentuk badan. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("pekerjaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Pekerjaan Fathih saat ini adalah pelajar di sekolah. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("makanan") &&
        pertanyaanLower.includes("kesukaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Makanan kesukaan Fathih adalah hidangan ayam dan daging yang tinggi akan protein. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("minuman") &&
        pertanyaanLower.includes("kesukaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Minuman kesukaan Fathih adalah aneka macam minuman coklat. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("hiburan") &&
        pertanyaanLower.includes("disukai") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Hiburan yang disukai Fathih adalah menonton serial tokusatsu seperti Ultraman dan Kamen Rider. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("intern") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman lebih dari 2 tahun sebagai intern (network administrator & data analisis). Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("berapa") &&
        pertanyaanLower.includes("lama") &&
        pertanyaanLower.includes("developer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menjadi developer sekitar 1-2 tahun dan telah mendevelop lebih dari 3 website. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("berapa") &&
        pertanyaanLower.includes("lama") &&
        pertanyaanLower.includes("freelancer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih bekerja sebagai freelancer lebih dari 2 tahun (content creator & web developer). Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("front") &&
        pertanyaanLower.includes("end") &&
        pertanyaanLower.includes("back") &&
        pertanyaanLower.includes("end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, Vue, React, dan Angular, Fathih juga cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("back") &&
        pertanyaanLower.includes("end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("database") &&
        pertanyaanLower.includes("dipahami") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memahami MySQL, PostgreSQL, dan MongoDB. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("apa") &&
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("front") &&
        pertanyaanLower.includes("end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, Vue, React, dan Angular. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("di") &&
        pertanyaanLower.includes("mana") &&
        pertanyaanLower.includes("pendidikan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang tahun 2022-2025. Ayo berikan lebih banyak pertanyaan lagi tentang Fathih!";
    }

    else {
        jawaban = "Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan pertanyaan lain tentang Fathih.";
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = `Anda: ${pertanyaan}`;
    userMessage.style.backgroundColor = 'rgb(30, 159, 171)';
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';
    chatBox.appendChild(botMessage);

    // Menambahkan efek pengetikan dari kiri ke kanan
    function typeMessage(message, element, speed) {
        let index = 0;
        const typingInterval = setInterval(function () {
            if (index <= message.length) {
                element.textContent = message.slice(0, index); // Menampilkan teks sebagian yang ditambahkan ke dalam elemen
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
    }

    // Memanggil fungsi untuk menampilkan pesan bot dengan efek pengetikan
    typeMessage(`Jazari: ${jawaban}`, botMessage, 50);

    inputField.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}