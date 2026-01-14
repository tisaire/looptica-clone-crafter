import React from 'react';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CookiesPolicy = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Cookies Policy",
      metaDescription: "Learn about how Looptica uses cookies on our website and how you can manage them.",
      heading: "Cookies Policy",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>COOKIES POLICY</h2>
        
        <p>A cookie is a file that is downloaded to your computer when you access certain web pages. Cookies allow a web page, among other things, to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information they contain and the way they use their equipment, they can be used to recognize the user.</p>
        
        <p>In accordance with the Second Section of Article 22 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (hereinafter, LSSI), LOOPTICA POBLENOU S.L. informs as follows:</p>
        
        <h3>1. COOKIES USED ON THIS WEBSITE</h3>
        
        <p>LOOPTICA POBLENOU S.L. uses a set of cookies on this website that allows us to provide a better experience to our users.</p>
        
        <p>The cookies used on this website are:</p>
        
        <h4>Technical cookies:</h4>
        <p>These are those that allow the user to navigate through the website and use the different options or services that exist on it, such as controlling traffic and data communication, identifying the session, accessing parts of restricted access, using security elements during navigation or sharing content through social networks.</p>
        
        <h4>Personalization cookies:</h4>
        <p>These are those that allow the user to access the service with some general characteristics predefined according to a series of criteria in the user's terminal, such as the language, the type of browser through which the service is accessed, the regional configuration from where the service is accessed, etc.</p>
        
        <h4>Analysis cookies:</h4>
        <p>These allow the person responsible for them to monitor and analyze the behavior of the users of the websites to which they are linked. The information collected through this type of cookies is used to measure the activity of the websites, applications or platforms and to create navigation profiles of the users of these sites, applications and platforms, in order to introduce improvements based on the analysis of the usage data made by the users of the service.</p>
        
        <h3>2. COOKIES FROM THIRD PARTIES</h3>
        
        <p>This website uses third-party cookies. Specifically, this website uses Google Analytics, a web analytics service provided by Google, Inc. with registered office in the United States. To provide these services, they use cookies that collect information, including the user's IP address, which will be transmitted, processed and stored by Google in the terms set out on the website Google.com. This includes the possible transmission of this information to third parties for legal requirements or when such third parties process the information on behalf of Google.</p>
        
        <h3>3. ACCEPTANCE OR REJECTION OF COOKIES</h3>
        
        <p>This website shows information about its Cookie Policy at the bottom of any page of the portal with each login so that you are aware.</p>
        
        <p>Given this information, it is possible to carry out the following actions:</p>
        <ul>
          <li>Accept cookies: this warning will not be displayed again when accessing any portal page during the current session.</li>
          <li>Close: the notice is hidden on the current page.</li>
          <li>More information: you will be able to obtain more information about what cookies are, know the Cookie Policy of LOOPTICA POBLENOU S.L. and modify the configuration of your browser.</li>
        </ul>
        
        <h3>4. DISABLING AND BLOCKING COOKIES</h3>
        
        <p>In any case, the user can allow, block or delete these cookies installed on their computer by configuring the browser options installed on their computer:</p>
        <ul>
          <li>Microsoft Internet Explorer: Tools menu > Internet Options > Privacy > Settings.</li>
          <li>Firefox: Tools menu > Options > Privacy > Cookies.</li>
          <li>Chrome: Menu > Settings > Show advanced options > Privacy > Content settings.</li>
          <li>Safari: Edit > Preferences > Privacy.</li>
          <li>Opera: Menu > Preferences > Advanced > Privacy.</li>
        </ul>
        
        <p>If you block the use of cookies on your browser, some of the services provided on looptica.com may not be available.</p>
        
        <h3>5. CHANGES TO THE COOKIES POLICY</h3>
        
        <p>This website may modify this Cookies Policy based on legislative, regulatory requirements, or with the purpose of adapting said policy to the instructions dictated by the Spanish Data Protection Agency, therefore, users are advised to periodically visit this page to know the changes suffered in them.</p>
        
        <p>When significant changes occur in this Cookies Policy, they will be communicated to users either through the web or via email to registered users.</p>
      `
    },
    es: {
      title: "Política de Cookies",
      metaDescription: "Aprenda cómo Looptica utiliza cookies en nuestro sitio web y cómo puede gestionarlas.",
      heading: "Política de Cookies",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>POLÍTICA DE COOKIES</h2>
        
        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
        
        <p>De conformidad con la Sección Segunda del Artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (en adelante, LSSI), LOOPTICA POBLENOU S.L. informa de la siguiente manera:</p>
        
        <h3>1. COOKIES UTILIZADAS EN ESTE SITIO WEB</h3>
        
        <p>LOOPTICA POBLENOU S.L. utiliza un conjunto de cookies en el presente sitio web que nos permite ofrecer un mejor servicio a nuestros usuarios.</p>
        
        <p>Las cookies utilizadas en este sitio web son:</p>
        
        <h4>Cookies técnicas:</h4>
        <p>Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, utilizar elementos de seguridad durante la navegación o compartir contenidos a través de redes sociales.</p>
        
        <h4>Cookies de personalización:</h4>
        <p>Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serían el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</p>
        
        <h4>Cookies de análisis:</h4>
        <p>Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
        
        <h3>2. COOKIES DE TERCEROS</h3>
        
        <p>Este sitio web utiliza cookies de terceros. Concretamente, este sitio web utiliza Google Analytics, un servicio de analítica web desarrollado por Google, Inc. con domicilio en los Estados Unidos. Para la prestación de estos servicios, utilizan cookies que recopilan información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la web Google.com. Esto incluye la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p>
        
        <h3>3. ACEPTACIÓN O RECHAZO DE COOKIES</h3>
        
        <p>Este sitio web muestra información sobre su Política de Cookies en la parte inferior de cualquier página del portal con cada inicio de sesión para que usted sea consciente.</p>
        
        <p>Ante esta información es posible llevar a cabo las siguientes acciones:</p>
        <ul>
          <li>Aceptar cookies: no se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión.</li>
          <li>Cerrar: se oculta el aviso en la presente página.</li>
          <li>Más información: podrá obtener más información sobre qué son las cookies, conocer la Política de Cookies de LOOPTICA POBLENOU S.L. y modificar la configuración de su navegador.</li>
        </ul>
        
        <h3>4. DESACTIVACIÓN Y BLOQUEO DE COOKIES</h3>
        
        <p>En cualquier caso, el usuario puede permitir, bloquear o eliminar estas cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>
        <ul>
          <li>Microsoft Internet Explorer: menú Herramientas > Opciones de Internet > Privacidad > Configuración.</li>
          <li>Firefox: menú Herramientas > Opciones > Privacidad > Cookies.</li>
          <li>Chrome: Menú > Configuración > Mostrar opciones avanzadas > Privacidad > Configuración de contenido.</li>
          <li>Safari: Edición > Preferencias > Privacidad.</li>
          <li>Opera: Menú > Preferencias > Avanzado > Privacidad.</li>
        </ul>
        
        <p>Si bloquea el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.</p>
        
        <h3>5. CAMBIOS EN LA POLÍTICA DE COOKIES</h3>
        
        <p>Es posible que la Política de Cookies de este sitio web cambie o se actualice, por ello es recomendable que revise esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>
        
        <p>Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.</p>
      `
    },
    ca: {
      title: "Política de Cookies",
      metaDescription: "Aprengui com Looptica utilitza cookies al nostre lloc web i com pot gestionar-les.",
      heading: "Política de Cookies",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
...
        <p>Quan es produeixin canvis significatius en aquesta Política de Cookies, es comunicaran als usuaris bé mitjançant la web o a través de correu electrònic als usuaris registrats.</p>
      `
    },
    de: {
      title: "Cookie-Richtlinie",
      metaDescription: "Erfahren Sie, wie Looptica Cookies auf unserer Website verwendet und wie Sie diese verwalten können.",
      heading: "Cookie-Richtlinie",
      lastUpdated: "Letzte Aktualisierung: April 2023",
      content: `
        <h2>COOKIE-RICHTLINIE</h2>
        
        <p>Ein Cookie ist eine Datei, die auf Ihren Computer heruntergeladen wird, wenn Sie auf bestimmte Webseiten zugreifen. Cookies ermöglichen es einer Webseite unter anderem, Informationen über die Surfgewohnheiten eines Benutzers oder seines Geräts zu speichern und abzurufen, und je nachdem, welche Informationen sie enthalten und wie Sie Ihr Gerät verwenden, können sie verwendet werden, um den Benutzer zu erkennen.</p>
        
        <p>Gemäß Abschnitt 2 von Artikel 22 des Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und elektronischen Handel (im Folgenden LSSI) informiert LOOPTICA POBLENOU S.L. wie folgt:</p>
        
        <h3>1. AUF DIESER WEBSITE VERWENDETE COOKIES</h3>
        
        <p>LOOPTICA POBLENOU S.L. verwendet eine Reihe von Cookies auf dieser Website, die es uns ermöglichen, unseren Benutzern eine bessere Erfahrung zu bieten.</p>
        
        <p>Die auf dieser Website verwendeten Cookies sind:</p>
        
        <h4>Technische Cookies:</h4>
        <p>Dies sind diejenigen, die es dem Benutzer ermöglichen, durch die Website zu navigieren und die verschiedenen Optionen oder Dienste zu nutzen, die auf ihr existieren, wie z.B. die Kontrolle des Datenverkehrs und der Datenkommunikation, die Identifizierung der Sitzung, den Zugriff auf Bereiche mit eingeschränktem Zugang, die Verwendung von Sicherheitselementen während der Navigation oder das Teilen von Inhalten über soziale Netzwerke.</p>
        
        <h4>Personalisierungs-Cookies:</h4>
        <p>Dies sind diejenigen, die es dem Benutzer ermöglichen, auf den Dienst mit einigen allgemeinen vordefinierten Merkmalen zuzugreifen, die auf einer Reihe von Kriterien im Terminal des Benutzers basieren, wie z.B. die Sprache, der Browsertyp, über den auf den Dienst zugegriffen wird, die regionale Konfiguration, von der aus auf den Dienst zugegriffen wird, usw.</p>
        
        <h4>Analyse-Cookies:</h4>
        <p>Diese ermöglichen es dem Verantwortlichen, das Verhalten der Benutzer der Websites zu überwachen und zu analysieren, mit denen sie verknüpft sind. Die durch diese Art von Cookies gesammelten Informationen werden verwendet, um die Aktivität der Websites, Anwendungen oder Plattformen zu messen und Navigationsprofile der Benutzer dieser Websites, Anwendungen und Plattformen zu erstellen, um Verbesserungen auf der Grundlage der Analyse der Nutzungsdaten durch die Benutzer des Dienstes einzuführen.</p>
        
        <h3>2. COOKIES VON DRITTANBIETERN</h3>
        
        <p>Diese Website verwendet Cookies von Drittanbietern. Insbesondere verwendet diese Website Google Analytics, einen Webanalysedienst von Google, Inc. mit Sitz in den Vereinigten Staaten. Zur Bereitstellung dieser Dienste verwenden sie Cookies, die Informationen sammeln, einschließlich der IP-Adresse des Benutzers, die von Google in den auf der Website Google.com festgelegten Bedingungen übermittelt, verarbeitet und gespeichert werden. Dies schließt die mögliche Übermittlung dieser Informationen an Dritte aus rechtlichen Gründen oder wenn solche Dritten die Informationen im Auftrag von Google verarbeiten, ein.</p>
        
        <h3>3. ANNAHME ODER ABLEHNUNG VON COOKIES</h3>
        
        <p>Diese Website zeigt Informationen über ihre Cookie-Richtlinie am unteren Rand jeder Seite des Portals bei jeder Anmeldung an, damit Sie sich dessen bewusst sind.</p>
        
        <p>Angesichts dieser Informationen ist es möglich, die folgenden Aktionen durchzuführen:</p>
        <ul>
          <li>Cookies akzeptieren: Diese Warnung wird während der aktuellen Sitzung beim Zugriff auf eine beliebige Portalseite nicht mehr angezeigt.</li>
          <li>Schließen: Der Hinweis wird auf der aktuellen Seite ausgeblendet.</li>
          <li>Weitere Informationen: Sie können weitere Informationen darüber erhalten, was Cookies sind, die Cookie-Richtlinie von LOOPTICA POBLENOU S.L. kennenlernen und die Konfiguration Ihres Browsers ändern.</li>
        </ul>
        
        <h3>4. DEAKTIVIERUNG UND BLOCKIERUNG VON COOKIES</h3>
        
        <p>In jedem Fall kann der Benutzer diese auf seinem Computer installierten Cookies zulassen, blockieren oder löschen, indem er die Optionen des auf seinem Computer installierten Browsers konfiguriert:</p>
        <ul>
          <li>Microsoft Internet Explorer: Menü Extras > Internetoptionen > Datenschutz > Einstellungen.</li>
          <li>Firefox: Menü Extras > Optionen > Datenschutz > Cookies.</li>
          <li>Chrome: Menü > Einstellungen > Erweiterte Optionen anzeigen > Datenschutz > Inhaltseinstellungen.</li>
          <li>Safari: Bearbeiten > Einstellungen > Datenschutz.</li>
          <li>Opera: Menü > Einstellungen > Erweitert > Datenschutz.</li>
        </ul>
        
        <p>Wenn Sie die Verwendung von Cookies in Ihrem Browser blockieren, sind möglicherweise einige der auf looptica.com bereitgestellten Dienste nicht verfügbar.</p>
        
        <h3>5. ÄNDERUNGEN DER COOKIE-RICHTLINIE</h3>
        
        <p>Diese Website kann diese Cookie-Richtlinie auf der Grundlage gesetzlicher, regulatorischer Anforderungen oder mit dem Zweck ändern, diese Richtlinie an die von der spanischen Datenschutzbehörde diktierten Anweisungen anzupassen, daher wird den Benutzern empfohlen, diese Seite regelmäßig zu besuchen, um die Änderungen zu erfahren, die daran vorgenommen wurden.</p>
        
        <p>Wenn wesentliche Änderungen an dieser Cookie-Richtlinie auftreten, werden sie den Benutzern entweder über die Website oder per E-Mail an registrierte Benutzer mitgeteilt.</p>
      `
    }
  };

  return (
    <>
      <Helmet>
        <title>{content[language].title} | Looptica</title>
        <meta name="description" content={content[language].metaDescription} />
        <link rel="canonical" href={`https://www.looptica.com/${language}/legal/cookies-policy`} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12">
          <ScrollReveal>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{content[language].heading}</h1>
            <p className="text-gray-500 mb-8">{content[language].lastUpdated}</p>
            
            {/* SECURITY: Content is sanitized with DOMPurify to prevent XSS attacks */}
            <div 
              className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-h3:mt-6 prose-p:text-gray-600 prose-a:text-[#55afa9] prose-a:no-underline hover:prose-a:text-[#ca6664]"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content[language].content) }}
            />
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CookiesPolicy;
