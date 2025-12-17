
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollReveal } from '@/components/ui';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  // Content based on language
  const content = {
    en: {
      title: "Privacy Policy",
      metaDescription: "Read Looptica's privacy policy to understand how we collect, use, and protect your personal information.",
      heading: "Privacy Policy",
      lastUpdated: "Last updated: April 2023",
      content: `
        <h2>PRIVACY POLICY</h2>
        <p>In accordance with the provisions established in the current regulations regarding the Protection of Personal Data and the Law on Information Society Services and Electronic Commerce, we inform you that the personal data provided through this website will be processed by LOOPTICA POBLENOU S.L., with CIF B02745636, whose data is available on the Legal Notice.</p>
        
        <h3>RESPONSIBLE FOR THE TREATMENT</h3>
        <ul>
          <li>Identity: LOOPTICA POBLENOU S.L.</li>
          <li>CIF: B02745636</li>
          <li>Address: RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA</li>
          <li>Email: info@looptica.com</li>
        </ul>
        
        <h3>PURPOSE OF THE TREATMENT</h3>
        <p>In LOOPTICA POBLENOU S.L. we treat the information provided by interested persons for the following purposes:</p>
        <ul>
          <li>Manage the provision of the contracted services.</li>
          <li>Respond to inquiries, requests or consultations.</li>
          <li>Send commercial communications regarding products or services that may be of interest to the user.</li>
        </ul>
        
        <h3>DATA CONSERVATION CRITERIA</h3>
        <p>The data will be kept for the time necessary to fulfill the purposes for which they were collected, as long as the deletion is not requested, and will be deleted with the appropriate security measures to guarantee the pseudonymization of the data or the complete destruction of the same.</p>
        
        <h3>LEGITIMATION</h3>
        <p>The legal basis for the processing of your data is the execution of the provision of the service and/or product request, the legitimate interest of the company and, in some cases, your consent. In cases where there is a contractual relationship, the provision of services and the development of the contractual relationship is also a legal basis.</p>
        
        <h3>DATA TRANSFER</h3>
        <p>Your data will not be transferred to third parties without your prior consent, except in cases where there is a legal obligation. In some cases, it may be necessary to communicate your data to suppliers as data processors with whom we have signed the corresponding contract.</p>
        
        <h3>RIGHTS</h3>
        <p>Any person has the right to obtain confirmation about whether in LOOPTICA POBLENOU S.L. we are processing personal data that concerns them or not.</p>
        <p>Interested persons have the right to:</p>
        <ul>
          <li>Request access to personal data relating to the data subject.</li>
          <li>Request its rectification or deletion.</li>
          <li>Request the limitation of its treatment.</li>
          <li>Oppose the treatment.</li>
          <li>Request the portability of the data.</li>
        </ul>
        <p>Interested parties may access their personal data, as well as request the rectification of inaccurate data or, where appropriate, request their deletion when, among other reasons, the data is no longer necessary for the purposes that were collected. In certain circumstances, the interested parties may request the limitation of the processing of their data, in which case we will only keep them for the exercise or defense of claims.</p>
        <p>In certain circumstances and for reasons related to their particular situation, the interested parties may object to the processing of their data. LOOPTICA POBLENOU S.L. will stop processing the data, except for compelling legitimate reasons, or the exercise or defense of possible claims. You may materially exercise your rights by sending an email to info@looptica.com identifying yourself with your ID or equivalent document.</p>
        <p>If you have given your consent for a specific purpose, you have the right to withdraw the consent granted at any time, without affecting the legality of the treatment based on the consent prior to its withdrawal.</p>
        <p>In the event that you feel your rights regarding data protection have been violated, especially when you have not obtained satisfaction in the exercise of your rights, you can file a complaint with the competent Data Protection Control Authority.</p>
        
        <h3>ACCURACY AND VERACITY OF THE DATA</h3>
        <p>The user guarantees that the personal data provided is truthful and is responsible for communicating any modifications to them. The user responds to the veracity of the personal data provided and undertakes to keep them properly updated. The user guarantees that all the information provided is correct, true and complete, and undertakes to keep them duly updated. The user will be solely responsible for any false or inaccurate statements made and the damages caused to LOOPTICA POBLENOU S.L. or to third parties by the information provided.</p>
        
        <h3>SECURITY MEASURES</h3>
        <p>LOOPTICA POBLENOU S.L. has adopted all the measures of a technical and organizational nature necessary to guarantee the security and integrity of the personal data that it treats, as well as to avoid its loss, alteration and/or access by unauthorized third parties. However, remember that no method of data transmission over the Internet, or method of electronic storage is 100% secure.</p>
        
        <h3>ACCEPTANCE OF THIS PRIVACY POLICY</h3>
        <p>The user acknowledges having read this document and agrees to all its terms, accepting it freely, expressly and unequivocally.</p>
      `
    },
    es: {
      title: "Política de Privacidad",
      metaDescription: "Lea la política de privacidad de Looptica para entender cómo recopilamos, utilizamos y protegemos su información personal.",
      heading: "Política de Privacidad",
      lastUpdated: "Última actualización: Abril 2023",
      content: `
        <h2>POLÍTICA DE PRIVACIDAD</h2>
        <p>De conformidad con lo establecido en la normativa vigente en Protección de Datos de Carácter Personal y la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informamos que los datos personales facilitados a través de esta web serán tratados por el titular de la misma, LOOPTICA POBLENOU S.L., con CIF B02745636, cuyos datos obran en el Aviso Legal.</p>
        
        <h3>RESPONSABLE DEL TRATAMIENTO</h3>
        <ul>
          <li>Identidad: LOOPTICA POBLENOU S.L.</li>
          <li>CIF: B02745636</li>
          <li>Dirección: RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA</li>
          <li>Correo electrónico: info@looptica.com</li>
        </ul>
        
        <h3>FINALIDAD DEL TRATAMIENTO</h3>
        <p>En LOOPTICA POBLENOU S.L. tratamos la información que nos facilitan las personas interesadas con los siguientes fines:</p>
        <ul>
          <li>Gestionar la prestación de los servicios contratados.</li>
          <li>Responder a las solicitudes, peticiones o consultas.</li>
          <li>Enviar comunicaciones comerciales sobre productos o servicios que puedan ser de interés del usuario.</li>
        </ul>
        
        <h3>CRITERIOS DE CONSERVACIÓN DE LOS DATOS</h3>
        <p>Los datos se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Usted tiene derecho a obtener confirmación sobre si en LOOPTICA POBLENOU S.L. estamos tratando sus datos personales, por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.</p>
        
        <h3>LEGITIMACIÓN</h3>
        <p>La base legal para el tratamiento de sus datos es la ejecución de la prestación del servicio y/o producto solicitado, el interés legítimo de la empresa y, en determinados casos, su consentimiento. En aquellos casos en los que exista una relación contractual, la prestación de servicios y el desarrollo de la relación contractual también constituye base jurídica.</p>
        
        <h3>CESIONES DE DATOS</h3>
        <p>Sus datos no serán cedidos a terceros sin su previo consentimiento, salvo en los casos en que exista una obligación legal. En algunos casos, puede ser necesario comunicar sus datos a proveedores como encargados de tratamiento con los que tenemos firmado el correspondiente contrato.</p>
        
        <h3>DERECHOS</h3>
        <p>Cualquier persona tiene derecho a obtener confirmación sobre si en LOOPTICA POBLENOU S.L. estamos tratando datos personales que les conciernan o no.</p>
        <p>Las personas interesadas tienen derecho a:</p>
        <ul>
          <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
          <li>Solicitar su rectificación o supresión.</li>
          <li>Solicitar la limitación de su tratamiento.</li>
          <li>Oponerse al tratamiento.</li>
          <li>Solicitar la portabilidad de los datos.</li>
        </ul>
        <p>Los interesados podrán acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</p>
        <p>En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. LOOPTICA POBLENOU S.L. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Podrá ejercitar materialmente sus derechos enviando un correo electrónico a info@looptica.com identificándose con su DNI o documento equivalente.</p>
        <p>Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
        <p>En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente.</p>
        
        <h3>EXACTITUD Y VERACIDAD DE LOS DATOS</h3>
        <p>El usuario garantiza que los datos personales facilitados son veraces y se hace responsable de comunicar cualquier modificación en los mismos. El usuario responde de la veracidad de los datos personales facilitados y se compromete a mantenerlos debidamente actualizados. El usuario garantiza que toda la información facilitada es correcta, verdadera y completa, y se compromete a mantenerla debidamente actualizada. El usuario será el único responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionar a LOOPTICA POBLENOU S.L. o a terceros, a causa de la cumplimentación de formularios con datos falsos, inexactos, incompletos o no actualizados.</p>
        
        <h3>MEDIDAS DE SEGURIDAD</h3>
        <p>LOOPTICA POBLENOU S.L. ha adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad e integridad de los datos de carácter personal que trate, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados. No obstante, recuerde que ningún método de transmisión de datos por Internet, o método de almacenamiento electrónico es 100% seguro.</p>
        
        <h3>ACEPTACIÓN DE ESTA POLÍTICA DE PRIVACIDAD</h3>
        <p>El usuario reconoce haber leído este documento y manifiesta estar conforme con la totalidad de sus términos, aceptándolo libre, expresa e inequívocamente.</p>
      `
    },
    ca: {
      title: "Política de Privacitat",
      metaDescription: "Llegiu la política de privacitat de Looptica per entendre com recopilem, utilitzem i protegim la seva informació personal.",
      heading: "Política de Privacitat",
      lastUpdated: "Darrera actualització: Abril 2023",
      content: `
        <h2>POLÍTICA DE PRIVACITAT</h2>
        <p>De conformitat amb l'establert a la normativa vigent en Protecció de Dades de Caràcter Personal i la Llei de Serveis de la Societat de la Informació i de Comerç Electrònic, l'informem que les dades personals facilitades a través d'aquesta web seran tractades pel titular de la mateixa, LOOPTICA POBLENOU S.L., amb CIF B02745636, les dades del qual consten a l'Avís Legal.</p>
        
        <h3>RESPONSABLE DEL TRACTAMENT</h3>
        <ul>
          <li>Identitat: LOOPTICA POBLENOU S.L.</li>
          <li>CIF: B02745636</li>
          <li>Adreça: RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA</li>
          <li>Correu electrònic: info@looptica.com</li>
        </ul>
        
        <h3>FINALITAT DEL TRACTAMENT</h3>
        <p>A LOOPTICA POBLENOU S.L. tractem la informació que ens faciliten les persones interessades amb les següents finalitats:</p>
        <ul>
          <li>Gestionar la prestació dels serveis contractats.</li>
          <li>Respondre a les sol·licituds, peticions o consultes.</li>
          <li>Enviar comunicacions comercials sobre productes o serveis que puguin ser d'interès de l'usuari.</li>
        </ul>
        
        <h3>CRITERIS DE CONSERVACIÓ DE LES DADES</h3>
        <p>Les dades es conservaran mentre es mantingui la relació comercial o durant els anys necessaris per complir amb les obligacions legals. Les dades no es cediran a tercers excepte en els casos en què hi hagi una obligació legal. Vostè té dret a obtenir confirmació sobre si a LOOPTICA POBLENOU S.L. estem tractant les seves dades personals, per tant té dret a accedir a les seves dades personals, rectificar les dades inexactes o sol·licitar la seva supressió quan les dades ja no siguin necessàries.</p>
        
        <h3>LEGITIMACIÓ</h3>
        <p>La base legal per al tractament de les seves dades és l'execució de la prestació del servei i/o producte sol·licitat, l'interès legítim de l'empresa i, en determinats casos, el seu consentiment. En aquells casos en què hi hagi una relació contractual, la prestació de serveis i el desenvolupament de la relació contractual també constitueix base jurídica.</p>
        
        <h3>CESSIONS DE DADES</h3>
        <p>Les seves dades no seran cedides a tercers sense el seu previ consentiment, excepte en els casos en què hi hagi una obligació legal. En alguns casos, pot ser necessari comunicar les seves dades a proveïdors com a encarregats de tractament amb els que tenim signat el corresponent contracte.</p>
        
        <h3>DRETS</h3>
        <p>Qualsevol persona té dret a obtenir confirmació sobre si a LOOPTICA POBLENOU S.L. estem tractant dades personals que els concerneixin o no.</p>
        <p>Les persones interessades tenen dret a:</p>
        <ul>
          <li>Sol·licitar l'accés a les dades personals relatives a l'interessat.</li>
          <li>Sol·licitar la seva rectificació o supressió.</li>
          <li>Sol·licitar la limitació del seu tractament.</li>
          <li>Oposar-se al tractament.</li>
          <li>Sol·licitar la portabilitat de les dades.</li>
        </ul>
        <p>Els interessats podran accedir a les seves dades personals, així com sol·licitar la rectificació de les dades inexactes o, si escau, sol·licitar la seva supressió quan, entre altres motius, les dades ja no siguin necessàries per a les finalitats que van ser recollides. En determinades circumstàncies, els interessats podran sol·licitar la limitació del tractament de les seves dades, en aquest cas únicament les conservarem per a l'exercici o la defensa de reclamacions.</p>
        <p>En determinades circumstàncies i per motius relacionats amb la seva situació particular, els interessats podran oposar-se al tractament de les seves dades. LOOPTICA POBLENOU S.L. deixarà de tractar les dades, excepte per motius legítims imperiosos, o l'exercici o la defensa de possibles reclamacions. Podrà exercitar materialment els seus drets enviant un correu electrònic a info@looptica.com identificant-se amb el seu DNI o document equivalent.</p>
        <p>Si ha atorgat el seu consentiment per a alguna finalitat concreta, té dret a retirar el consentiment atorgat en qualsevol moment, sense que això afecti a la licitud del tractament basat en el consentiment previ a la seva retirada.</p>
        <p>En cas que senti vulnerats els seus drets pel que fa a la protecció de les seves dades personals, especialment quan no hagi obtingut satisfacció en l'exercici dels seus drets, pot presentar una reclamació davant l'Autoritat de Control en matèria de Protecció de Dades competent.</p>
        
        <h3>EXACTITUD I VERACITAT DE LES DADES</h3>
        <p>L'usuari garanteix que les dades personals facilitades són veraces i es fa responsable de comunicar qualsevol modificació en les mateixes. L'usuari respon de la veracitat de les dades personals facilitades i es compromet a mantenir-les degudament actualitzades. L'usuari garanteix que tota la informació facilitada és correcta, verdadera i completa, i es compromet a mantenir-la degudament actualitzada. L'usuari serà l'únic responsable de qualsevol dany o perjudici, directe o indirecte, que pogués ocasionar a LOOPTICA POBLENOU S.L. o a tercers, a causa de l'emplenament de formularis amb dades falses, inexactes, incompletes o no actualitzades.</p>
        
        <h3>MESURES DE SEGURETAT</h3>
        <p>LOOPTICA POBLENOU S.L. ha adoptat totes les mesures d'índole tècnica i organitzativa necessàries per garantir la seguretat i integritat de les dades de caràcter personal que tracti, així com per evitar la seva pèrdua, alteració i/o accés per part de tercers no autoritzats. No obstant això, recordi que cap mètode de transmissió de dades per Internet, o mètode d'emmagatzematge electrònic és 100% segur.</p>
        
        <h3>ACCEPTACIÓ D'AQUESTA POLÍTICA DE PRIVACITAT</h3>
        <p>L'usuari reconeix haver llegit aquest document i manifesta estar conforme amb la totalitat dels seus termes, acceptant-lo lliure, expressa i inequívocament.</p>
      `
    },
    de: {
      title: "Datenschutzrichtlinie",
      metaDescription: "Lesen Sie die Datenschutzrichtlinie von Looptica, um zu verstehen, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen.",
      heading: "Datenschutzrichtlinie",
      lastUpdated: "Zuletzt aktualisiert: April 2023",
      content: `
        <h2>DATENSCHUTZRICHTLINIE</h2>
        <p>Gemäß den Bestimmungen der geltenden Vorschriften zum Schutz personenbezogener Daten und des Gesetzes über Dienste der Informationsgesellschaft und elektronischen Geschäftsverkehr informieren wir Sie darüber, dass die über diese Website bereitgestellten personenbezogenen Daten von LOOPTICA POBLENOU S.L., CIF B02745636, verarbeitet werden, deren Daten im Impressum verfügbar sind.</p>
        
        <h3>VERANTWORTLICHER FÜR DIE VERARBEITUNG</h3>
        <ul>
          <li>Identität: LOOPTICA POBLENOU S.L.</li>
          <li>CIF: B02745636</li>
          <li>Adresse: RAMBLA DEL POBLENOU, 48 LOCAL, 08005, BARCELONA, BARCELONA</li>
          <li>E-Mail: info@looptica.com</li>
        </ul>
        
        <h3>ZWECK DER VERARBEITUNG</h3>
        <p>Bei LOOPTICA POBLENOU S.L. verarbeiten wir die von interessierten Personen bereitgestellten Informationen für folgende Zwecke:</p>
        <ul>
          <li>Verwaltung der Bereitstellung der beauftragten Dienstleistungen.</li>
          <li>Beantwortung von Anfragen, Anträgen oder Konsultationen.</li>
          <li>Versand kommerzieller Mitteilungen über Produkte oder Dienstleistungen, die für den Benutzer von Interesse sein könnten.</li>
        </ul>
        
        <h3>KRITERIEN FÜR DIE AUFBEWAHRUNG VON DATEN</h3>
        <p>Die Daten werden so lange aufbewahrt, wie die Geschäftsbeziehung aufrechterhalten wird oder während der Jahre, die zur Erfüllung der gesetzlichen Verpflichtungen erforderlich sind. Die Daten werden nicht an Dritte weitergegeben, außer in Fällen, in denen eine gesetzliche Verpflichtung besteht. Sie haben das Recht, eine Bestätigung darüber zu erhalten, ob LOOPTICA POBLENOU S.L. Ihre personenbezogenen Daten verarbeitet, daher haben Sie das Recht, auf Ihre personenbezogenen Daten zuzugreifen, ungenaue Daten zu berichtigen oder deren Löschung zu beantragen, wenn die Daten nicht mehr erforderlich sind.</p>
        
        <h3>RECHTSGRUNDLAGE</h3>
        <p>Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist die Ausführung der Bereitstellung der angeforderten Dienstleistung und/oder des Produkts, das berechtigte Interesse des Unternehmens und in bestimmten Fällen Ihre Einwilligung. In Fällen, in denen eine Vertragsbeziehung besteht, stellen auch die Erbringung von Dienstleistungen und die Entwicklung der Vertragsbeziehung eine Rechtsgrundlage dar.</p>
        
        <h3>DATENÜBERMITTLUNG</h3>
        <p>Ihre Daten werden nicht ohne Ihre vorherige Zustimmung an Dritte weitergegeben, außer in Fällen, in denen eine gesetzliche Verpflichtung besteht. In einigen Fällen kann es erforderlich sein, Ihre Daten an Lieferanten als Auftragsverarbeiter weiterzugeben, mit denen wir den entsprechenden Vertrag abgeschlossen haben.</p>
        
        <h3>RECHTE</h3>
        <p>Jede Person hat das Recht, eine Bestätigung darüber zu erhalten, ob LOOPTICA POBLENOU S.L. personenbezogene Daten verarbeitet, die sie betreffen oder nicht.</p>
        <p>Interessierte Personen haben das Recht:</p>
        <ul>
          <li>Zugang zu personenbezogenen Daten zu beantragen, die sie betreffen.</li>
          <li>Deren Berichtigung oder Löschung zu beantragen.</li>
          <li>Die Einschränkung ihrer Verarbeitung zu beantragen.</li>
          <li>Der Verarbeitung zu widersprechen.</li>
          <li>Die Übertragbarkeit der Daten zu beantragen.</li>
        </ul>
        <p>Interessierte können auf ihre personenbezogenen Daten zugreifen sowie die Berichtigung ungenauer Daten oder gegebenenfalls deren Löschung beantragen, wenn unter anderem die Daten für die Zwecke, für die sie erhoben wurden, nicht mehr erforderlich sind. Unter bestimmten Umständen können Interessierte die Einschränkung der Verarbeitung ihrer Daten beantragen, in diesem Fall bewahren wir sie nur zur Geltendmachung oder Verteidigung von Ansprüchen auf.</p>
        <p>Unter bestimmten Umständen und aus Gründen, die mit ihrer besonderen Situation zusammenhängen, können Interessierte der Verarbeitung ihrer Daten widersprechen. LOOPTICA POBLENOU S.L. wird die Verarbeitung der Daten einstellen, außer aus zwingenden berechtigten Gründen oder zur Ausübung oder Verteidigung möglicher Ansprüche. Sie können Ihre Rechte materiell ausüben, indem Sie eine E-Mail an info@looptica.com senden und sich mit Ihrem Personalausweis oder einem gleichwertigen Dokument identifizieren.</p>
        <p>Wenn Sie Ihre Einwilligung für einen bestimmten Zweck erteilt haben, haben Sie das Recht, die erteilte Einwilligung jederzeit zu widerrufen, ohne dass dies die Rechtmäßigkeit der Verarbeitung auf der Grundlage der Einwilligung vor deren Widerruf berührt.</p>
        <p>Falls Sie sich in Ihren Rechten hinsichtlich des Schutzes Ihrer personenbezogenen Daten verletzt fühlen, insbesondere wenn Sie bei der Ausübung Ihrer Rechte keine Zufriedenheit erlangt haben, können Sie eine Beschwerde bei der zuständigen Datenschutzkontrollbehörde einreichen.</p>
        
        <h3>GENAUIGKEIT UND RICHTIGKEIT DER DATEN</h3>
        <p>Der Benutzer garantiert, dass die bereitgestellten personenbezogenen Daten wahrheitsgemäß sind, und ist dafür verantwortlich, jegliche Änderungen mitzuteilen. Der Benutzer ist für die Richtigkeit der bereitgestellten personenbezogenen Daten verantwortlich und verpflichtet sich, diese ordnungsgemäß aktuell zu halten. Der Benutzer garantiert, dass alle bereitgestellten Informationen korrekt, wahr und vollständig sind, und verpflichtet sich, sie ordnungsgemäß aktuell zu halten. Der Benutzer ist allein verantwortlich für alle Schäden oder Verletzungen, direkt oder indirekt, die LOOPTICA POBLENOU S.L. oder Dritten durch das Ausfüllen von Formularen mit falschen, ungenauen, unvollständigen oder nicht aktualisierten Daten entstehen könnten.</p>
        
        <h3>SICHERHEITSMASSNAHMEN</h3>
        <p>LOOPTICA POBLENOU S.L. hat alle technischen und organisatorischen Maßnahmen getroffen, die erforderlich sind, um die Sicherheit und Integrität der von ihr verarbeiteten personenbezogenen Daten zu gewährleisten sowie deren Verlust, Änderung und/oder unbefugten Zugriff durch Dritte zu verhindern. Beachten Sie jedoch, dass keine Methode der Datenübertragung über das Internet oder elektronische Speichermethode zu 100 % sicher ist.</p>
        
        <h3>ANNAHME DIESER DATENSCHUTZRICHTLINIE</h3>
        <p>Der Benutzer bestätigt, dieses Dokument gelesen zu haben, und erklärt sich mit allen seinen Bedingungen einverstanden und akzeptiert sie frei, ausdrücklich und eindeutig.</p>
      `
    }
  };

  return (
    <>
      <Helmet>
        <title>{content[language].title} | Looptica</title>
        <meta name="description" content={content[language].metaDescription} />
        <link rel="canonical" href={`https://www.looptica.com/${language}/legal/privacy-policy`} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto py-12">
          <ScrollReveal>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{content[language].heading}</h1>
            <p className="text-gray-500 mb-8">{content[language].lastUpdated}</p>
            
            <div 
              className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-h3:mt-6 prose-p:text-gray-600 prose-a:text-[#55afa9] prose-a:no-underline hover:prose-a:text-[#ca6664]"
              dangerouslySetInnerHTML={{ __html: content[language].content }}
            />
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
