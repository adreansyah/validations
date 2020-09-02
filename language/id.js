const message = (rule) => {
    return {
        'required': ['Perlu diisi'],
        'email': ['Alamat email tidak benar'],
        'length': ['Panjang harus ' + rule + ' karakter'],
        'minLength': ['Minimum ' + rule + ' karakter yang dibutuhkan'],
        'maxLength': ['Maksimum ' + rule + ' karakter yang dibutuhkan'],
        'minValue': ['Nilai minimalnya adalah ' + rule],
        'maxValue': ['Nilai maksimum adalah ' + rule],
        'equals': ['Bidang tidak cocok'],
        'matches': ['Bidang tidak benar'],
        'phone': ['Nomor telepon tidak benar'],
        'letterNumber': ['Hanya boleh huruf dan angka'],
        'letterNumberSp': ['Hanya boleh huruf, angka dan spasi'],
        'decimal': ['Haya boleh desimal (3 digit dibelakang koma)'],
        'number': ['Hanya boleh angka'],
        'numberSp': ['Hanya boleh angka dan spasi'],
        'numberColon': ['Hanya boleh angka dan koma'],
        'letter': ['Hanya boleh huruf'],
        'letterSp': ['Hanya boleh huruf dan spasi'],
        'npwp': ['Format npwp salah'],
        'passwordFormat': ['Silahkan masukkan kata sandi dengan 6-32 karakter', 'Gunakan kombinasi huruf & angka'],
        'fileSize': ['Ukuran file terlalu besar'],
        'fileType': ['Tipe file salah'],
        'moneyLackOfNumber': [`Harga harus kelipatan ${rule}`],
        'diskonRate': [`Diskon tidak boleh lebih dari ${rule} persen`],
        'alphaNumericStrip': [`Hanya boleh alphanumeric & simbol (-)`],
        'alphaNumericStripDot': [`Hanya boleh alphanumeric & simbol (-) & (.)`]
    }
}

export default message;