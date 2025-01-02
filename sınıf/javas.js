// Form elementini DOM'dan ID ile seçiyoruz
const form = document.getElementById("userForm"); // HTML'deki form öğesi "userForm" ID'siyle tanımlanmış

// Formun 'submit' olayını dinlemek için bir event listener ekliyoruz
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan davranışını (sayfanın yenilenmesi) engeller

    // Formdaki kullanıcı girdilerini almak için giriş alanlarını seçiyoruz ve boşlukları temizliyoruz
    const firstName = document.getElementById("fname").value.trim(); // Kullanıcının adını alır ve boşlukları temizler
    const lastName = document.getElementById("lname").value.trim(); // Kullanıcının soyadını alır ve boşlukları temizler

    // Kullanıcı tarafından gerekli tüm alanların doldurulup doldurulmadığını kontrol ediyoruz
    if (!firstName || !lastName) { // Eğer herhangi bir alan boşsa
        alert("Lütfen tüm alanları giriniz!"); // Kullanıcıya bir uyarı mesajı gösterir
        return; // İşlemi sonlandırır
    }

    // Kullanıcı tarafından girilen veriler üzerinde işlem yapmak için konsola yazdırıyoruz
    console.log("Veriler backende gönderiliyor..."); // Backend'e veri gönderildiğini simüle eder
    console.log("Ad:", firstName); // Kullanıcının adını konsola yazdırır
    console.log("Soyad:", lastName); // Kullanıcının soyadını konsola yazdırır

    // Kullanıcıya başarılı bir mesaj gösteriyoruz
    alert(`Merhaba ${firstName} ${lastName}, verileriniz başarıyla gönderildi!`); // Kullanıcıya girilen bilgilerle birlikte başarı mesajı gösterir
});