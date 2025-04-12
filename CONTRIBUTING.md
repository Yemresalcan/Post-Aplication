# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkür ederiz! Katkılarınızı nasıl en iyi şekilde yapabileceğinizi bu rehberde bulabilirsiniz.

## Geliştirme Süreci

1. Projeyi forklayın ve kendi bilgisayarınıza klonlayın
2. Yeni bir branch oluşturun: `git checkout -b feature/özellik-ismi` veya `fix/hata-ismi`
3. Değişikliklerinizi yapın ve test edin
4. Değişikliklerinizi commit edin: `git commit -m 'Özellik: Açıklama'`
5. Branch'inizi uzak sunucuya push edin: `git push origin feature/özellik-ismi`
6. GitHub üzerinden Pull Request açın

## Kod Standartları

- Anlamlı değişken ve fonksiyon isimleri kullanın
- Kodunuzu açıklayıcı yorumlarla belgelendirin
- Mümkün olduğunca mevcut kod stiliyle uyumlu olun
- Yeni özellikler için uygun testler ekleyin

## Pull Request Süreci

1. PR açmadan önce kodunuzu test ettiğinizden emin olun
2. PR'nizi mümkün olduğunca tek bir özellik veya düzeltme ile sınırlı tutun
3. PR açarken değişikliklerinizi açıklayan detaylı bir açıklama ekleyin
4. İnceleme ve geribildirim için bekleyin

## Commit Mesaj Formatı

Commit mesajlarınızı aşağıdaki formatta yazmanızı öneririz:

```
<tür>: <açıklama>

[isteğe bağlı gövde]

[isteğe bağlı altbilgi]
```

Türler şunlar olabilir:
- `özellik`: Yeni bir özellik
- `düzeltme`: Hata düzeltmesi
- `belge`: Belgelendirme değişiklikleri
- `stil`: Kodun işlevini değiştirmeyen stil değişiklikleri (boşluklar, girintiler vb.)
- `refactor`: İşlevselliği değiştirmeyen kod yapısı değişiklikleri
- `performans`: Performans iyileştirmeleri
- `test`: Test ekleme veya düzeltme
- `yapı`: Yapılandırma dosyaları ve bağımlılıklarla ilgili değişiklikler

Örnek:
```
özellik: Ürün arama işlevselliği eklendi

- Ürünleri ada göre arama özelliği eklendi
- Kategori filtreleme seçeneği eklendi

Fix #123
```

## Teşekkürler!

Katkılarınız için tekrar teşekkür ederiz. Sorularınız olursa, issue açmaktan çekinmeyin.

---

# 🇬🇧 Contributing Guide

Thank you for your interest in contributing to this project! You can find guidelines on how to best contribute in this guide.

## Development Process

1. Fork the project and clone it to your computer
2. Create a new branch: `git checkout -b feature/feature-name` or `fix/bug-name`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Feature: Description'`
5. Push your branch to the remote server: `git push origin feature/feature-name`
6. Open a Pull Request on GitHub

## Code Standards

- Use meaningful variable and function names
- Document your code with explanatory comments
- Try to be as consistent as possible with the existing code style
- Add appropriate tests for new features

## Pull Request Process

1. Make sure you test your code before opening a PR
2. Keep your PR as limited as possible to a single feature or fix
3. Include a detailed description explaining your changes when opening a PR
4. Wait for review and feedback

## Commit Message Format

We recommend writing your commit messages in the following format:

```
<type>: <description>

[optional body]

[optional footer]
```

Types can be:
- `feature`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Style changes that don't change the functionality of the code (spaces, indentation, etc.)
- `refactor`: Code structure changes that don't change functionality
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to configuration files and dependencies

Example:
```
feature: Added product search functionality

- Added ability to search products by name
- Added category filtering option

Fix #123
```

## Thank You!

Thank you again for your contributions. If you have any questions, don't hesitate to open an issue. 