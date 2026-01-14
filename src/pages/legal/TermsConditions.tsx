import React from 'react';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsConditions = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Terms & Conditions",
      metaDescription: "Read Looptica's terms and conditions for using our website and services.",
      heading: "Terms & Conditions",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>LEGAL NOTICE</h2>
        
        <h3>1. IDENTIFICATION INFORMATION</h3>
        <p>In compliance with the duty to inform contained in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce, the following information is reflected below: the company that owns this website is LOOPTICA POBLENOU S.L., with CIF B02745636 and address for the purpose of notifications in RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA. The contact email address of the company is: info@looptica.com.</p>
        
        <h3>2. USERS</h3>
        <p>Access to and/or use of this website of LOOPTICA POBLENOU S.L. confers the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here. These conditions will apply regardless of the General Conditions of Contract that in their case are mandatory.</p>
        
        <h3>3. USE OF THE PORTAL</h3>
        <p>www.looptica.com provides access to information, services, programs or data (hereinafter, "the contents") on the Internet belonging to LOOPTICA POBLENOU S.L. or to its licensors to which the USER can have access. The USER assumes responsibility for the use of the portal.</p>
        <p>The USER undertakes to make appropriate use of the contents and services that LOOPTICA POBLENOU S.L. may offer through its website and with an enunciative, but not limiting, character, agrees not to use them to:</p>
        <ul>
          <li>Engage in illegal activities, illegal or contrary to good faith and public order;</li>
          <li>Disseminate content or propaganda of a racist, xenophobic or pornographic-illegal nature, apology for terrorism or attacking human rights;</li>
          <li>Cause damage to the physical and logical systems of LOOPTICA POBLENOU S.L., its suppliers or third parties, introduce or spread computer viruses or any other physical or logical systems that are likely to cause the aforementioned damage;</li>
          <li>Try to access and, where appropriate, use the email accounts of other users and modify or manipulate their messages.</li>
        </ul>
        <p>LOOPTICA POBLENOU S.L. reserves the right to withdraw all comments and contributions that violate respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, that attempt against youth or childhood, public order or security or that, in his opinion, were not suitable for publication. In any case, LOOPTICA POBLENOU S.L. will not be responsible for the opinions expressed by users through forums, chats, or other participation tools.</p>
        
        <h3>4. DATA PROTECTION</h3>
        <p>LOOPTICA POBLENOU S.L. complies with the guidelines of Organic Law 3/2018, of December 5, on Personal Data Protection and guarantee of digital rights and with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 regarding the protection of natural persons with regard to the processing of personal data and the free circulation of these data (GDPR), and ensures the correct use and treatment of the user's personal data. For this, next to each form for collecting personal data, in the services that the user may request from info@looptica.com, the information required by the regulations regarding the processing of personal data will be included. LOOPTICA POBLENOU S.L. will not transfer the data obtained through its website to third parties without the express consent of the User. The User has the right to access, rectify, cancel, oppose, limit and transfer their personal data, indicating it in writing via email sent to info@looptica.com, complying with the legally established requirements.</p>
        
        <h3>5. INTELLECTUAL AND INDUSTRIAL PROPERTY</h3>
        <p>LOOPTICA POBLENOU S.L. by itself or as an assignee, is the owner of all intellectual and industrial property rights of its website, as well as the elements contained therein (for example, images, sound, audio, video, software or texts; brands or logos, color combinations, structure and design, selection of used materials, computer programs necessary for its operation, access and use, etc.), owned by LOOPTICA POBLENOU S.L. or its licensors. All rights reserved. By virtue of the provisions of articles 8 and 32.1, second paragraph, of the Law on Intellectual Property, the reproduction, distribution and public communication, including the method of making them available, of all or part of the contents of this website, for commercial purposes, in any medium and by any technical means, without the authorization of LOOPTICA POBLENOU S.L. are expressly prohibited. The USER undertakes to respect the Intellectual and Industrial Property rights owned by LOOPTICA POBLENOU S.L. The USER may view the elements of the portal and even print, copy and store them on the hard drive of their computer or on any other physical medium as long as it is, solely and exclusively, for their personal and private use. The USER must refrain from deleting, altering, evading or manipulating any protection device or security system that was installed on the pages of LOOPTICA POBLENOU S.L.</p>
        
        <h3>6. DISCLAIMER OF WARRANTIES AND LIABILITY</h3>
        <p>LOOPTICA POBLENOU S.L. is not responsible, in any case, for damages of any nature that may cause, for example: errors or omissions in the contents, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all the necessary technological measures to prevent it.</p>
        
        <h3>7. MODIFICATIONS</h3>
        <p>LOOPTICA POBLENOU S.L. reserves the right to make the modifications it deems appropriate on its website without prior notice, being able to change, delete or add both the contents and services provided through it and the way in which they are presented or located on its website.</p>
        
        <h3>8. LINKS</h3>
        <p>In the case that the www.looptica.com website contains links or hyperlinks to other Internet sites, LOOPTICA POBLENOU S.L. will not exercise any type of control over said sites and contents. In no case will LOOPTICA POBLENOU S.L. assume any responsibility for the contents of any link belonging to a third-party website, nor will it guarantee the technical availability, quality, reliability, accuracy, breadth, veracity, validity and constitutionality of any material or information contained in none of said hyperlinks or other Internet sites. Likewise, the inclusion of these external connections will not imply any type of association, merger or participation with the connected entities.</p>
        
        <h3>9. RIGHT OF EXCLUSION</h3>
        <p>LOOPTICA POBLENOU S.L. reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, at its own request or that of a third party, to those users who fail to comply with these General Conditions of Use.</p>
        
        <h3>10. GENERALITIESLOOPTICA POBLENOU S.L. will pursue the breach of these conditions as well as any improper use of its website exercising all civil and criminal actions that may correspond to it by law.</p>
        
        <h3>11. APPLICABLE LEGISLATION AND JURISDICTION</h3>
        <p>The relationship between LOOPTICA POBLENOU S.L. and the USER will be governed by current Spanish regulations and any controversy will be submitted to the Courts and Tribunals of Barcelona.</p>
      `
    },
    es: {
      title: "Términos y Condiciones",
      metaDescription: "Lea los términos y condiciones de Looptica para el uso de nuestro sitio web y servicios.",
      heading: "Términos y Condiciones",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>AVISO LEGAL</h2>
        
        <h3>1. DATOS IDENTIFICATIVOS</h3>
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de esta web es LOOPTICA POBLENOU S.L., con CIF B02745636 y domicilio a efectos de notificaciones en RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA. La dirección de correo electrónico de contacto de la empresa es: info@looptica.com.</p>
        
        <h3>2. USUARIOS</h3>
        <p>El acceso y/o uso de este portal de LOOPTICA POBLENOU S.L. atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.</p>
        
        <h3>3. USO DEL PORTAL</h3>
        <p>www.looptica.com proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a LOOPTICA POBLENOU S.L. o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.</p>
        <p>El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que LOOPTICA POBLENOU S.L. pueda ofrecer a través de su web y con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
        <ul>
          <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público;</li>
          <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos;</li>
          <li>Provocar daños en los sistemas físicos y lógicos de LOOPTICA POBLENOU S.L., de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados;</li>
          <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
        </ul>
        <p>LOOPTICA POBLENOU S.L. se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación. En cualquier caso, LOOPTICA POBLENOU S.L. no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.</p>
        
        <h3>4. PROTECCIÓN DE DATOS</h3>
        <p>LOOPTICA POBLENOU S.L. cumple con las directrices de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario. Para ello, junto a cada formulario de recogida de datos de carácter personal, en los servicios que el usuario pueda solicitar a info@looptica.com, hará saber al usuario de la existencia y aceptación de las condiciones particulares del tratamiento de sus datos en cada caso, informándole de la responsabilidad del fichero creado, la dirección del responsable, la posibilidad de ejercer sus derechos, la finalidad del tratamiento y las comunicaciones de datos a terceros en su caso. LOOPTICA POBLENOU S.L. no cederá los datos obtenidos a través de su web a terceros sin el consentimiento expreso del Usuario. El Usuario tiene la posibilidad de ejercitar los derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos personales, de manera gratuita mediante correo electrónico a info@looptica.com o en la dirección postal anteriormente indicada, incluyendo copia del DNI.</p>
        
        <h3>5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
        <p>LOOPTICA POBLENOU S.L. por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de LOOPTICA POBLENOU S.L. o bien de sus licenciantes. Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de LOOPTICA POBLENOU S.L. El USUARIO se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de LOOPTICA POBLENOU S.L. Podrá visualizar los elementos del portal e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. El USUARIO deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en las páginas de LOOPTICA POBLENOU S.L.</p>
        
        <h3>6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
        <p>LOOPTICA POBLENOU S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
        
        <h3>7. MODIFICACIONES</h3>
        <p>LOOPTICA POBLENOU S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
        
        <h3>8. ENLACES</h3>
        <p>En el caso de que en www.looptica.com se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, LOOPTICA POBLENOU S.L. no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso LOOPTICA POBLENOU S.L. asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet. Igualmente la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.</p>
        
        <h3>9. DERECHO DE EXCLUSIÓN</h3>
        <p>LOOPTICA POBLENOU S.L. se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.</p>
        
        <h3>10. GENERALIDADES</h3>
        <p>LOOPTICA POBLENOU S.L. perseguirá el incumplimiento de las presentes condiciones así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.</p>
        
        <h3>11. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
        <p>La relación entre LOOPTICA POBLENOU S.L. y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Barcelona.</p>
      `
    },
    ca: {
      title: "Termes i Condicions",
      metaDescription: "Llegiu els termes i condicions de Looptica per a l'ús del nostre lloc web i serveis.",
      heading: "Termes i Condicions",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>AVÍS LEGAL</h2>
        
        <h3>1. DADES IDENTIFICATIVES</h3>
        <p>En compliment amb el deure d'informació recollit a l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i del Comerç Electrònic, a continuació es reflecteixen les següents dades: l'empresa titular d'aquesta web és LOOPTICA POBLENOU S.L., amb CIF B02745636 i domicili a efectes de notificacions a RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA. L'adreça de correu electrònic de contacte de l'empresa és: info@looptica.com.</p>
        
        <h3>2. USUARIS</h3>
        <p>L'accés i/o ús d'aquest portal de LOOPTICA POBLENOU S.L. atribueix la condició d'USUARI, que accepta, des de dit accés i/o ús, les Condicions Generals d'Ús aquí reflectides. Les citades Condicions seran d'aplicació independentment de les Condicions Generals de Contractació que en el seu cas resultin d'obligat compliment.</p>
        
        <h3>3. ÚS DEL PORTAL</h3>
        <p>www.looptica.com proporciona l'accés a multitud d'informacions, serveis, programes o dades (en endavant, "els continguts") a Internet pertanyents a LOOPTICA POBLENOU S.L. o als seus llicenciants als quals l'USUARI pugui tenir accés. L'USUARI assumeix la responsabilitat de l'ús del portal.</p>
        <p>L'USUARI es compromet a fer un ús adequat dels continguts i serveis que LOOPTICA POBLENOU S.L. pugui oferir a través de la seva web i amb caràcter enunciatiu però no limitatiu, a no emprar-los per a:</p>
        <ul>
          <li>Incórrer en activitats il·lícites, il·legals o contràries a la bona fe i a l'ordre públic;</li>
          <li>Difondre continguts o propaganda de caràcter racista, xenòfob, pornogràfic-il·legal, d'apologia del terrorisme o atemptat contra els drets humans;</li>
          <li>Provocar danys en els sistemes físics i lògics de LOOPTICA POBLENOU S.L., dels seus proveïdors o de terceres persones, introduir o difondre a la xarxa virus informàtics o qualssevol altres sistemes físics o lògics que siguin susceptibles de provocar els danys anteriorment esmentats;</li>
          <li>Intentar accedir i, en el seu cas, utilitzar els comptes de correu electrònic d'altres usuaris i modificar o manipular els seus missatges.</li>
        </ul>
        <p>LOOPTICA POBLENOU S.L. es reserva el dret de retirar tots aquells comentaris i aportacions que vulnerin el respecte a la dignitat de la persona, que siguin discriminatoris, xenòfobs, racistes, pornogràfics, que atemptin contra la joventut o la infància, l'ordre o la seguretat pública o que, al seu judici, no resultessin adequats per a la seva publicació. En qualsevol cas, LOOPTICA POBLENOU S.L. no serà responsable de les opinions vessades pels usuaris a través dels fòrums, xats, o altres eines de participació.</p>
        
        <h3>4. PROTECCIÓ DE DADES</h3>
        <p>LOOPTICA POBLENOU S.L. compleix amb les directrius de la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals i amb el Reglament (UE) 2016/679 del Parlament Europeu i del Consell de 27 d'abril de 2016 relatiu a la protecció de les persones físiques pel que fa al tractament de dades personals i a la lliure circulació d'aquestes dades (RGPD), i vetlla per garantir un correcte ús i tractament de les dades personals de l'usuari. Per a això, juntament amb cada formulari de recollida de dades de caràcter personal, en els serveis que l'usuari pugui sol·licitar a info@looptica.com, farà saber a l'usuari de l'existència i acceptació de les condicions particulars del tractament de les seves dades en cada cas, informant-lo de la responsabilitat del fitxer creat, l'adreça del responsable, la possibilitat d'exercir els seus drets, la finalitat del tractament i les comunicacions de dades a tercers en el seu cas. LOOPTICA POBLENOU S.L. no cedirà les dades obtingudes a través de la seva web a tercers sense el consentiment exprés de l'Usuari. L'Usuari té la possibilitat d'exercitar els drets d'accés, rectificació, cancel·lació, oposició, limitació i portabilitat de les seves dades personals, de manera gratuïta mitjançant correu electrònic a info@looptica.com o a l'adreça postal anteriorment indicada, incloent còpia del DNI.</p>
        
        <h3>5. PROPIETAT INTEL·LECTUAL I INDUSTRIAL</h3>
        <p>LOOPTICA POBLENOU S.L. per si o com a cessionària, és titular de tots els drets de propietat intel·lectual i industrial de la seva pàgina web, així com dels elements continguts en la mateixa (a títol enunciatiu, imatges, so, àudio, vídeo, programari o textos; marques o logotips, combinacions de colors, estructura i disseny, selecció de materials usats, programes d'ordinador necessaris per al seu funcionament, accés i ús, etc.), titularitat de LOOPTICA POBLENOU S.L. o bé dels seus llicenciants. Tots els drets reservats. En virtut del que disposa els articles 8 i 32.1, paràgraf segon, de la Llei de Propietat Intel·lectual, queden expressament prohibides la reproducció, la distribució i la comunicació pública, inclosa la seva modalitat de posada a disposició, de la totalitat o part dels continguts d'aquesta pàgina web, amb fins comercials, en qualsevol suport i per qualsevol mitjà tècnic, sense l'autorització de LOOPTICA POBLENOU S.L. L'USUARI es compromet a respectar els drets de Propietat Intel·lectual i Industrial titularitat de LOOPTICA POBLENOU S.L. Podrà visualitzar els elements del portal i fins i tot imprimir-los, copiar-los i emmagatzemar-los en el disc dur del seu ordinador o en qualsevol altre suport físic sempre que sigui, única i exclusivament, per al seu ús personal i privat. L'USUARI haurà d'abstenir-se de suprimir, alterar, eludir o manipular qualsevol dispositiu de protecció o sistema de seguretat que estigués instal·lat a les pàgines de LOOPTICA POBLENOU S.L.</p>
        
        <h3>6. EXCLUSIÓ DE GARANTIES I RESPONSABILITAT</h3>
        <p>LOOPTICA POBLENOU S.L. no es fa responsable, en cap cas, dels danys i perjudicis de qualsevol naturalesa que poguessin ocasionar, a títol enunciatiu: errors o omissions en els continguts, falta de disponibilitat del portal o la transmissió de virus o programes maliciosos o lesius en els continguts, malgrat haver adoptat totes les mesures tecnològiques necessàries per evitar-ho.</p>
        
        <h3>7. MODIFICACIONS</h3>
        <p>LOOPTICA POBLENOU S.L. es reserva el dret d'efectuar sense previ avís les modificacions que consideri oportunes en el seu portal, podent canviar, suprimir o afegir tant els continguts i serveis que es prestin a través de la mateixa com la forma en què aquests apareguin presentats o localitzats en el seu portal.</p>
        
        <h3>8. ENLLAÇOS</h3>
        <p>En el cas que a www.looptica.com es disposessin enllaços o hipervincles cap a altres llocs d'Internet, LOOPTICA POBLENOU S.L. no exercirà cap tipus de control sobre aquests llocs i continguts. En cap cas LOOPTICA POBLENOU S.L. assumirà responsabilitat alguna pels continguts d'algun enllaç pertanyent a un lloc web aliè, ni garantirà la disponibilitat tècnica, qualitat, fiabilitat, exactitud, amplitud, veracitat, validesa i constitucionalitat de qualsevol material o informació continguda en cap dels esmentats hipervincles o altres llocs d'Internet. Igualment la inclusió d'aquestes connexions externes no implicarà cap tipus d'associació, fusió o participació amb les entitats connectades.</p>
        
        <h3>9. DRET D'EXCLUSIÓ</h3>
        <p>LOOPTICA POBLENOU S.L. es reserva el dret a denegar o retirar l'accés a portal i/o els serveis oferts sense necessitat de preavís, a instància pròpia o d'un tercer, a aquells usuaris que incompleixin les presents Condicions Generals d'Ús.</p>
        
        <h3>10. GENERALITATS</h3>
        <p>LOOPTICA POBLENOU S.L. perseguirà l'incompliment de les presents condicions així com qualsevol utilització indeguda del seu portal exercint totes les accions civils i penals que li puguin correspondre en dret.</p>
        
        <h3>11. LEGISLACIÓ APLICABLE I JURISDICCIÓ</h3>
        <p>La relació entre LOOPTICA POBLENOU S.L. i l'USUARI es regirà per la normativa espanyola vigent i qualsevol controvèrsia se sotmetrà als Jutjats i tribunals de la ciutat de Barcelona.</p>
      `
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      metaDescription: "Lesen Sie die Allgemeinen Geschäftsbedingungen von Looptica für die Nutzung unserer Website und Dienstleistungen.",
      heading: "Allgemeine Geschäftsbedingungen",
      lastUpdated: "Letzte Aktualisierung: April 2023",
      content: `
        <h2>RECHTLICHER HINWEIS</h2>
        
        <h3>1. IDENTIFIKATIONSDATEN</h3>
        <p>In Erfüllung der Informationspflicht gemäß Artikel 10 des Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und elektronischen Handel sind im Folgenden die folgenden Informationen aufgeführt: Das Unternehmen, das Eigentümer dieser Website ist, ist LOOPTICA POBLENOU S.L., mit CIF B02745636 und Adresse für Benachrichtigungen in RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA. Die Kontakt-E-Mail-Adresse des Unternehmens lautet: info@looptica.com.</p>
        
        <h3>2. BENUTZER</h3>
        <p>Der Zugriff auf und/oder die Nutzung dieser Website von LOOPTICA POBLENOU S.L. verleiht die Eigenschaft eines BENUTZERS, der durch diesen Zugriff und/oder diese Nutzung die hier wiedergegebenen Allgemeinen Nutzungsbedingungen akzeptiert. Diese Bedingungen gelten unabhängig von den Allgemeinen Vertragsbedingungen, die gegebenenfalls zwingend sind.</p>
        
        <h3>3. NUTZUNG DES PORTALS</h3>
        <p>www.looptica.com bietet Zugang zu einer Vielzahl von Informationen, Diensten, Programmen oder Daten (im Folgenden "die Inhalte") im Internet, die LOOPTICA POBLENOU S.L. oder seinen Lizenzgebern gehören und auf die der BENUTZER Zugriff haben kann. Der BENUTZER übernimmt die Verantwortung für die Nutzung des Portals.</p>
        <p>Der BENUTZER verpflichtet sich, die Inhalte und Dienste, die LOOPTICA POBLENOU S.L. über seine Website anbieten kann, angemessen zu nutzen und mit aufzählendem, aber nicht einschränkendem Charakter, sich zu verpflichten, sie nicht zu verwenden, um:</p>
        <ul>
          <li>Illegale, rechtswidrige oder gegen Treu und Glauben und die öffentliche Ordnung verstoßende Aktivitäten durchzuführen;</li>
          <li>Inhalte oder Propaganda rassistischer, fremdenfeindlicher oder pornografisch-illegaler Natur, Befürwortung des Terrorismus oder Angriffe auf die Menschenrechte zu verbreiten;</li>
          <li>Schäden an den physischen und logischen Systemen von LOOPTICA POBLENOU S.L., seinen Lieferanten oder Dritten zu verursachen, Computerviren oder andere physische oder logische Systeme einzuführen oder zu verbreiten, die wahrscheinlich die oben genannten Schäden verursachen;</li>
          <li>Zu versuchen, auf die E-Mail-Konten anderer Benutzer zuzugreifen und gegebenenfalls deren Nachrichten zu ändern oder zu manipulieren.</li>
        </ul>
        <p>LOOPTICA POBLENOU S.L. behält sich das Recht vor, alle Kommentare und Beiträge zu entfernen, die die Würde der Person verletzen, diskriminierend, fremdenfeindlich, rassistisch, pornografisch sind, gegen die Jugend oder Kindheit, die öffentliche Ordnung oder Sicherheit verstoßen oder nach seinem Urteil nicht zur Veröffentlichung geeignet sind. In jedem Fall ist LOOPTICA POBLENOU S.L. nicht verantwortlich für die von Benutzern über Foren, Chats oder andere Beteiligungswerkzeuge geäußerten Meinungen.</p>
        
        <h3>4. DATENSCHUTZ</h3>
        <p>LOOPTICA POBLENOU S.L. erfüllt die Richtlinien des Organgesetzes 3/2018 vom 5. Dezember über den Schutz personenbezogener Daten und die Garantie digitaler Rechte und der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten und zum freien Datenverkehr (DSGVO) und sorgt für die ordnungsgemäße Verwendung und Behandlung personenbezogener Daten des Benutzers. Zu diesem Zweck werden neben jedem Formular zur Erfassung personenbezogener Daten in den Diensten, die der Benutzer bei info@looptica.com anfordern kann, die gesetzlich vorgeschriebenen Informationen zur Verarbeitung personenbezogener Daten aufgenommen. LOOPTICA POBLENOU S.L. wird die über seine Website erhaltenen Daten ohne ausdrückliche Zustimmung des Benutzers nicht an Dritte weitergeben. Der Benutzer hat das Recht auf Zugang, Berichtigung, Löschung, Widerspruch, Einschränkung und Übertragbarkeit seiner personenbezogenen Daten, indem er dies schriftlich per E-Mail an info@looptica.com sendet und die gesetzlich festgelegten Anforderungen erfüllt.</p>
        
        <h3>5. GEISTIGES UND GEWERBLICHES EIGENTUM</h3>
        <p>LOOPTICA POBLENOU S.L. ist selbst oder als Abtretungsempfänger Eigentümer aller geistigen und gewerblichen Eigentumsrechte seiner Website sowie der darin enthaltenen Elemente (z.B. Bilder, Ton, Audio, Video, Software oder Texte; Marken oder Logos, Farbkombinationen, Struktur und Design, Auswahl der verwendeten Materialien, Computerprogramme, die für deren Betrieb, Zugriff und Nutzung erforderlich sind usw.), die LOOPTICA POBLENOU S.L. oder seinen Lizenzgebern gehören. Alle Rechte vorbehalten. Gemäß den Bestimmungen der Artikel 8 und 32.1, zweiter Absatz, des Gesetzes über geistiges Eigentum sind die Vervielfältigung, Verbreitung und öffentliche Zugänglichmachung, einschließlich der Bereitstellung, aller oder eines Teils der Inhalte dieser Website zu kommerziellen Zwecken, auf jedem Medium und mit jedem technischen Mittel ohne die Genehmigung von LOOPTICA POBLENOU S.L. ausdrücklich verboten. Der BENUTZER verpflichtet sich, die geistigen und gewerblichen Eigentumsrechte von LOOPTICA POBLENOU S.L. zu respektieren. Der BENUTZER kann die Elemente des Portals anzeigen und sogar drucken, kopieren und auf der Festplatte seines Computers oder auf einem anderen physischen Medium speichern, sofern dies ausschließlich für seinen persönlichen und privaten Gebrauch erfolgt. Der BENUTZER muss davon absehen, irgendwelche Schutzvorrichtungen oder Sicherheitssysteme, die auf den Seiten von LOOPTICA POBLENOU S.L. installiert sind, zu löschen, zu ändern, zu umgehen oder zu manipulieren.</p>
        
        <h3>6. HAFTUNGSAUSSCHLUSS</h3>
        <p>LOOPTICA POBLENOU S.L. ist in keinem Fall für Schäden jeglicher Art verantwortlich, die beispielsweise verursacht werden können durch: Fehler oder Auslassungen in den Inhalten, Nichtverfügbarkeit des Portals oder die Übertragung von Viren oder schädlichen oder schädlichen Programmen in den Inhalten, trotz aller notwendigen technologischen Maßnahmen, um dies zu verhindern.</p>
        
        <h3>7. ÄNDERUNGEN</h3>
        <p>LOOPTICA POBLENOU S.L. behält sich das Recht vor, ohne vorherige Ankündigung die Änderungen vorzunehmen, die es für angemessen hält auf seinem Portal, wobei es die Inhalte und Dienste, die darüber bereitgestellt werden, sowie die Art und Weise, wie sie auf seinem Portal präsentiert oder lokalisiert werden, ändern, löschen oder hinzufügen kann.</p>
        
        <h3>8. LINKS</h3>
        <p>Falls auf www.looptica.com Links oder Hyperlinks zu anderen Internet-Websites vorhanden sind, übt LOOPTICA POBLENOU S.L. keine Kontrolle über diese Websites und Inhalte aus. In keinem Fall übernimmt LOOPTICA POBLENOU S.L. die Verantwortung für die Inhalte eines Links, der zu einer Website Dritter gehört, noch garantiert es die technische Verfügbarkeit, Qualität, Zuverlässigkeit, Genauigkeit, Umfang, Wahrhaftigkeit, Gültigkeit und Verfassungsmäßigkeit von Material oder Informationen, die in keinem dieser Hyperlinks oder anderen Internet-Websites enthalten sind. Ebenso impliziert die Aufnahme dieser externen Verbindungen keine Art von Verbindung, Fusion oder Beteiligung mit den verbundenen Einheiten.</p>
        
        <h3>9. AUSSCHLUSSRECHT</h3>
        <p>LOOPTICA POBLENOU S.L. behält sich das Recht vor, den Zugang zum Portal und/oder die angebotenen Dienste ohne vorherige Ankündigung zu verweigern oder zu entziehen, auf eigenen Wunsch oder auf Wunsch eines Dritten, für Benutzer, die diese Allgemeinen Nutzungsbedingungen nicht einhalten.</p>
        
        <h3>10. ALLGEMEINES</h3>
        <p>LOOPTICA POBLENOU S.L. wird die Nichteinhaltung dieser Bedingungen sowie jede missbräuchliche Nutzung seines Portals verfolgen und alle zivil- und strafrechtlichen Maßnahmen ergreifen, die ihm gesetzlich zustehen.</p>
        
        <h3>11. ANWENDBARES RECHT UND GERICHTSBARKEIT</h3>
        <p>Die Beziehung zwischen LOOPTICA POBLENOU S.L. und dem BENUTZER unterliegt den geltenden spanischen Vorschriften, und jede Kontroverse wird den Gerichten und Tribunalen von Barcelona vorgelegt.</p>
      `
    }
  };

  return (
    <>
      <Helmet>
        <title>{content[language].title} | Looptica</title>
        <meta name="description" content={content[language].metaDescription} />
        <link rel="canonical" href={`https://www.looptica.com/${language}/legal/terms-conditions`} />
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

export default TermsConditions;
