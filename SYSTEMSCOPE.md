# Project scope / Zakres systemu

## Brief project description / Krótki opis projektu

Należy zbudować aplikację wykorzystywaną do organizacji i zarządzania wydarzeniami społecznościowymi, zwanymi dalej imprezami. W celu korzystania z funkcjonalności aplikacji, użytkownik musi założyć konto poprzez formularz rejestracji lub system OAuth, umożliwiający rejestrację za pomocą serwisów takich jak:  

* Facebook,
* Twitter,
* Google.

Po udanej autoryzacji użytkownik otrzymuje dostęp do funkcjonalności takich jak tworzenie i edycja wydarzeń (wydarzenia mogą być prywatne i publiczne), zarządzanie znajomymi, wysyłanie wiadomości. W ramach danego wydarzenia użytkownik może:

* Tworzyć playlisty muzyczne za pomocą serwisu Spotify,
* Wyszukiwać i dodawać propozycje gier (planszowych, komputerowych i konsolowych) oraz filmów,
* Udostępnić unikalny link / qrcode do wydarzenia,
* Rozmawiać za pomocą chatu grupowego z innymi uczestnikami imprezy,
* Dodać miejsce i czas imprezy, na podstawie których inni zaproszeni mogą wyznaczyć drogę dojazdu za pomocą auta lub komunikacji miejskiej (aktualnie tylko w Poznaniu),
* Tworzyć listy zakupów z możliwością przypisania się użytkowników do konkretnych punktów listy,
* Przeglądanie kalendarza z dodanymi wszystkimi imprezami, w których użytkownik brał, bierze lub planuje wziąć udział.

## System actors with description / Aktorzy systemu i ich opis

### Primary actors / Aktorzy podstawowi

Actor / Aktor | Opis
--- | ---
User / Użytkownik | Osoba tworząca i uczestnicząca w imprezach. Użytkownik jest osobą powyżej 18 roku życia. Przykładowym użytkownikiem jest student, który może co tydzień organizować imprezy ze znajomymi ze studiów i potrzebuje aplikacji, która przyśpieszy i ułatwi proces organizacji.
System admin / Administrator systemu | Osoba odpowiadająca za poprawne funkcjonowanie systemu oraz zarządzanie uprawnieniami. Wymagane jest doświadczenie roczne w administrowaniu podobnie złożonych systemów oraz wykształcenie wyższe techniczne.

### Secondary actors / Aktorzy wspomagający

Actor / Aktor | Opis
--- | ---
CSP (Cloud Service Provider) / Dostawca usług chmurowych | Firma dostarczająca usługi chmurowe i gwarantująca stabilne ich działanie. Zapewnia bez awaryjność i bezzwłoczne usuwanie usterki.
Google Play / App Store | Serwis umożliwiający udostępnienie aplikacji mobilnej.
AAP (Authentication & Authorization Platform) / Serwis uwierzytelniający | Serwis dostarczający rozwiązania do autoryzacji i autentykacji użytkowników na podstawie m.in. protokołu OAuth2. Proponowana platforma to Auth0.
MSS (Music Streaming Service) / Serwis muzyczny | Udostępnia możliwość tworzenia playlist muzycznych na podstawie zasobów własnych.
Games Info Provider / Dostawca informacji nt. gier | Serwis udostępniający API do pobierania listy gier wraz z informacjami o nich, np. SteamDB
MSP (Map Service Provider) / Dostawca usług mapowych | Firma dostarczająca informacje związane z mapami (ich graficzna reprezentacja) oraz wyznaczająca rzeczywisty przebieg trasy między dwoma (lub więcej) punktami, proponowany dostawca to MapBox
PTIP (Public Transport Info Provider) / Dostawca informacji o komunikacji miejskiej | Firma udostępniająca informacje na temat komunikacji miejskiej w danym mieście. Przykładem jest publiczne API Poznania, gdzie mamy dostęp do informacji na temat linii autobusowych i tramwajowych, przystankach i rozkładach jazdy.

### External actors / Aktorzy zewnętrzni

Actor / Aktor | Opis
--- | ---
Owner / Właściciel | Oczekuje wysokiego uptime aplikacji, że dane wrażliwe będa odpowiednio chronione.

## Actor-goal table / Tabela aktor-cel

### Primary actors / Aktorzy podstawowi

Actor / Aktor | Goals
--- | ---
User / Użytkownik | Tworzenie wydarzeń
 | Dołączanie do imprez
 | Zarządzanie swoimi imprezami
 | Komunikacja z uczestnikami imprez
 | Znalezienie drogi na imprezę

### Secondary actors / Aktorzy wspomagający

Actor / Aktor | Goals
--- | ---
CSP / Dostawca usług chmurowych | Udostępnia serwer w chmurze, na którym trzymany jest backend i web-frontend aplikacji
Google Play / App Store | Zapewnia dostęp do aplikacji szerokiemu gronu odbiorców
 | Raportuje informacji odnośnie urządzeń, na których zainstalowana jest aplikacja
 | Udostępnia możliwość wdrażania aplikacji w różnych fazach (internal, alfa, beta, release)
 | Raportuje informacje na temat błędów wewnętrznych aplikacji
AAP / Serwis uwierzytelniający | Udostępnia API do autoryzacji i autentykacji użytkowników
 | Zapewnia bezpieczeństwo przechowywania danych użytkowników
 | Zapewnia bezpieczne logowanie i rejestrację
MSS / Serwis muzyczny | Udostępnia API do tworzenia playlist na podstawie zasobów własnych
MSP / Dostawca usług mapowych | Udostępnia graficzną reprezentacje map
 | Udostępnia API do wyznaczania rzeczywistej trasy między dwoma (lub więcej) punktami
PTIP / Dostawca informacji o komunikacji miejskiej | Udostępnia informacje na temat komunikacji miejskiej w danym mieście w tym o przystankach, liniach autobusowych, tramwajowych i rozkładach jazdy

### External actors / Aktorzy zewnętrzni

Actor / Aktor | Goals
--- | ---
Owner / Właściciel | Sprawowanie kontroli nad funkcjonowaniem systemu.

## IN-OUT list / Lista IN-OUT

Category / Kategoria    | IN | OUT
--- | --- | ---
Languages / Języki | Polski | Reszta języków
 | Angielski
Auth Services / Serwisy używane do autoryzacji | Logowanie własne | Reszta serwisów
 | Facebook
 | Google
 | Twitter
Public Transportation / Dojazd za pomocą komunikacji publicznej | Poznań | Inne miasta

## Project dictionary / Słownik projektowy

Term / Pojęcie | Definition / Definicja
--- | ---
Użytkownik | Indywiduum korzystające z aplikacji
Twórca | Osoba tworząca wydarzenie
Impreza | Wydarzenie społecznościowe gromadzące przynajmniej 2 osoby, odbywające się w konkretnym miejscu i czasie
Zaproszony | Osoba zaproszona na wydarzenie
Dane użytkownika | Imię, nazwisko, adres email, unikalny identyfikator, zdjęcie profilowe
Administrator systemu | Osoba odpowiedzialna za rozwój i utrzymanie software'u
FAQ | ang. _Frequently Asked Questions_ - najczęściej zadawane pytania
Dostawca usług chmurowych | Podmiot oferujący usługę dostępu do usług chmurowych
Zaproszenie do aplikacji | unikalny link przedstawiony w formie tekstowej lub graficznej (Kod QR) za pomocą którego użytkownik może jednym kliknięciem dołączyć do imprezy
Kod QR | alfanumeryczny, dwuwymiarowy, matrycowy, kwadratowy kod graficzny do generowania zaproszeń do aplikacji
Serwis uwierzytelniający | Podmiot oferujący interfejs programistyczny, za pomocą którego można przeprowadzić autoryzację i autentykację użytkownika
Serwis muzyczny | Podmiot oferujący interfejs programistyczny do tworzenia playlist muzycznych oraz wyszukiwania muzyki wraz z możliwością 30-sekundowego odsłuchu
Playlista | Zbiór utowrów muzycznych, może być uporządkowany lub odtwarzany losowo
Znajomy | Inny użytkownik, z którym została utworzona odpowiednia relacja
Chat | Wymiana wiadomości tekstowych między użytkownikami. Uporządkowany zbiór wiadomości tekstowych z przypisanym użytkownikiem oraz grupą docelową (imprezą).
API | ang. _Application Programming Interface_ - interfejs programistyczny aplikacji. W przypadku projektu zwracający informacje w postaci JSON.
_TODO_: Dopisać do słownika PTIP i MSP

## Short Use Cases / Skrócone przypadki użycia

### **UC1: Tworzenie imprezy**

Użytkownik podaje tytuł oraz opis imprezy. Wskazuje czy jest ona publiczna czy prywatna. Podaje ponaddto miejsce oraz czas, w którym impreza ma się odbyć. Podczas tworzenia wydarzenia użytkowników może dodać z góry zaproszone osoby z listy znajomych. Po pomyślnym utworzeniu imprezy zostaje ona dodana do kalendarza użytkownika, a zaproszone osoby dostają powiadomienie o nowym zaproszeniu.

### **UC2: Wysyłanie wiadomości w czacie grupowym**

Użytkownik na podstronie odpowiedniej imprezy przechodzi do zakładki **Chat**. Na posortowanej liście widzi poprzednie wiadomości na czacie, poniżej ma odpowiedni input (wejście z klawiatury) do wpisania swojej wiadomości. Po kliknięciu odpowiedniego przycisku wiadomość zostaje wysłana, a osoby powiązane z tym chatem dostają powiadomienie o nowej wiadomości.

### **UC3: Tworzenie playlist muzycznych**

Użytkownik w odpowiednim polu wyszukiwarki wpisuje nazwę utworu lub wykonawcę po czym API Spotify zwraca listę z wynikami wyszukiwania. Użytkownik może kliknąć w utwór. Po zapełnieniu listy docelowymi utworami użytkownik klika przycisk **Zapisz** i playlista jest odsyłana z powrotem do serwisu Spotify oraz jest generowany do niej specjalny odsyłacz.

### **UC4: Propozycja gier na imprezę**

Użytkownik może zaproponować grę, którą chciałby, aby pojawiła się na imprezie. W tym celu zaznacza odpowiednio rodzaj gry do preferowanej przez siebie platformy (PC, Konsola, Planszowa) i wyszukuje jej nazwę (lub jej część). Po dodaniu propozycji inni użytkownicy głosują, czy chcą, aby dana gra pojawiła się na imprezie. Po stronie uczestników imprezy leży fizyczne zorganizowanie danej gry.

### **UC5: Wyszukiwanie drogi na imprezę**

Użytkownik może wyznaczyć drogę ze swojej aktualnej lokalizacji do lokalizacji imprezy. Może wybrać czas, w którym chce dotrzeć (domyślnie jest to godzina rozpoczęcia imprezy). Jeżeli użytkownik oraz miejsce imprezy znajdują się w obsługiwanym na podstawie listy IN/OUT mieście, użytkownik może wybrać znajdowanie drogi za pomocą komunikacji miejskiej. W przeciwnym razie pozostają opcje: pieszo oraz samochodem. Za pomocą MSP wyznaczana jest trasa, a użytkownikami pokazywana jest jest wizualizacja i dodatkowe informacje.