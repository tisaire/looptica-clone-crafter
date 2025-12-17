
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import GoogleCalendarButton from '@/components/ui/GoogleCalendarButton';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

type OticonModelProps = {
  id: string;
  name: string;
  heroImage: string;
  description: {
    en: string;
    es: string;
    ca: string;
  };
  longDescription: {
    en: string[];
    es: string[];
    ca: string[];
  };
  features: {
    title: string;
    description: {
      en: string;
      es: string;
      ca: string;
    };
  }[];
  specifications: {
    category: {
      en: string;
      es: string;
      ca: string;
    };
    items: {
      label: {
        en: string;
        es: string;
        ca: string;
      };
      value: {
        en: string;
        es: string;
        ca: string;
      };
    }[];
  }[];
  price: {
    range: {
      en: string;
      es: string;
      ca: string;
    };
    note: {
      en: string;
      es: string;
      ca: string;
    };
  };
  images: string[];
};

// Function to get the model data by ID (would typically come from an API)
const getModelById = (id: string): OticonModelProps | undefined => {
  return modelData.find(model => model.id === id);
};

// Shared content for all models
const sharedContent = {
  backToModels: {
    en: "Back to All Models",
    es: "Volver a Todos los Modelos",
    ca: "Tornar a Tots els Models"
  },
  specifications: {
    en: "Technical Specifications",
    es: "Especificaciones Técnicas",
    ca: "Especificacions Tècniques"
  },
  features: {
    en: "Key Features",
    es: "Características Principales",
    ca: "Característiques Principals"
  },
  price: {
    en: "Price Range",
    es: "Rango de Precios",
    ca: "Rang de Preus"
  },
  gallery: {
    en: "Product Gallery",
    es: "Galería de Productos",
    ca: "Galeria de Productes"
  },
  appointment: {
    title: {
      en: "Schedule a Free Consultation",
      es: "Programa una Consulta Gratuita",
      ca: "Programa una Consulta Gratuïta"
    },
    description: {
      en: "Talk to our hearing specialists and try these hearing aids risk-free.",
      es: "Habla con nuestros especialistas en audición y prueba estos audífonos sin riesgo.",
      ca: "Parla amb els nostres especialistes en audició i prova aquests audiòfons sense risc."
    },
    button: {
      en: "Book Appointment",
      es: "Reservar Cita",
      ca: "Reservar Cita"
    }
  },
  notFound: {
    en: "Model not found",
    es: "Modelo no encontrado",
    ca: "Model no trobat"
  },
  whatsapp: {
    statusMessage: {
      en: "Typically replies within 1 hour",
      es: "Normalmente responde en 1 hora",
      ca: "Normalment respon en 1 hora"
    },
    chatMessage: {
      en: "Hello! 👋🏼 Interested in this Oticon hearing aid model? I'm here to help!",
      es: "¡Hola! 👋🏼 ¿Interesado en este modelo de audífono Oticon? ¡Estoy aquí para ayudar!",
      ca: "Hola! 👋🏼 Interessat en aquest model d'audiòfon Oticon? Estic aquí per ajudar!"
    },
    placeholder: {
      en: "Type a message...",
      es: "Escribe un mensaje...",
      ca: "Escriu un missatge..."
    }
  }
};

// Sample model data (in a real app, this would be fetched from an API)
const modelData: OticonModelProps[] = [
  {
    id: 'real',
    name: 'Oticon Real™',
    heroImage: '/images/brands/oticon/oticon-real.jpg',
    description: {
      en: 'Next-generation technology that helps you hear better in noisy environments.',
      es: 'Tecnología de última generación que te ayuda a escuchar mejor en entornos ruidosos.',
      ca: 'Tecnologia de darrera generació que t\'ajuda a escoltar millor en entorns sorollosos.'
    },
    longDescription: {
      en: [
        "Oticon Real™ represents the latest innovation in hearing technology, designed to provide a more natural hearing experience even in complex sound environments.",
        "Using Deep Neural Network technology, Oticon Real™ processes sound in a way that works more like your brain naturally does, allowing for better speech understanding and reduced listening effort.",
        "With its advanced features, Oticon Real™ helps you stay connected to the world around you and enjoy a fuller, richer hearing experience."
      ],
      es: [
        "Oticon Real™ representa la última innovación en tecnología auditiva, diseñada para proporcionar una experiencia auditiva más natural incluso en entornos sonoros complejos.",
        "Utilizando tecnología de Red Neural Profunda, Oticon Real™ procesa el sonido de una manera más similar a como lo hace tu cerebro de forma natural, permitiendo una mejor comprensión del habla y un menor esfuerzo auditivo.",
        "Con sus características avanzadas, Oticon Real™ te ayuda a mantenerte conectado con el mundo que te rodea y disfrutar de una experiencia auditiva más completa y rica."
      ],
      ca: [
        "Oticon Real™ representa la darrera innovació en tecnologia auditiva, dissenyada per proporcionar una experiència auditiva més natural fins i tot en entorns sonors complexos.",
        "Utilitzant tecnologia de Xarxa Neural Profunda, Oticon Real™ processa el so d'una manera més similar a com ho fa el teu cervell de forma natural, permetent una millor comprensió de la parla i un menor esforç auditiu.",
        "Amb les seves característiques avançades, Oticon Real™ t'ajuda a mantenir-te connectat amb el món que t'envolta i gaudir d'una experiència auditiva més completa i rica."
      ]
    },
    features: [
      {
        title: "BrainHearing™ Technology",
        description: {
          en: "Supports how your brain naturally processes sound for more natural listening experiences.",
          es: "Apoya cómo tu cerebro procesa naturalmente el sonido para experiencias auditivas más naturales.",
          ca: "Dona suport a com el teu cervell processa naturalment el so per a experiències auditives més naturals."
        }
      },
      {
        title: "Deep Neural Network",
        description: {
          en: "Trained on 12 million real-life sounds to deliver more detail with better clarity and balance.",
          es: "Entrenado con 12 millones de sonidos de la vida real para ofrecer más detalle con mejor claridad y equilibrio.",
          ca: "Entrenat amb 12 milions de sons de la vida real per oferir més detall amb millor claredat i equilibri."
        }
      },
      {
        title: "Rechargeable",
        description: {
          en: "Full-day power on a single charge, including streaming from your favorite devices.",
          es: "Energía para todo el día con una sola carga, incluida la transmisión desde tus dispositivos favoritos.",
          ca: "Energia per a tot el dia amb una sola càrrega, inclosa la transmissió des dels teus dispositius favorits."
        }
      }
    ],
    specifications: [
      {
        category: {
          en: "Connectivity",
          es: "Conectividad",
          ca: "Connectivitat"
        },
        items: [
          {
            label: {
              en: "Bluetooth",
              es: "Bluetooth",
              ca: "Bluetooth"
            },
            value: {
              en: "Yes (2.4 GHz)",
              es: "Sí (2.4 GHz)",
              ca: "Sí (2.4 GHz)"
            }
          },
          {
            label: {
              en: "Mobile App",
              es: "Aplicación Móvil",
              ca: "Aplicació Mòbil"
            },
            value: {
              en: "Oticon ON App",
              es: "Aplicación Oticon ON",
              ca: "Aplicació Oticon ON"
            }
          }
        ]
      },
      {
        category: {
          en: "Battery",
          es: "Batería",
          ca: "Bateria"
        },
        items: [
          {
            label: {
              en: "Type",
              es: "Tipo",
              ca: "Tipus"
            },
            value: {
              en: "Lithium-ion rechargeable",
              es: "Recargable de iones de litio",
              ca: "Recarregable d'ions de liti"
            }
          },
          {
            label: {
              en: "Battery Life",
              es: "Duración de la Batería",
              ca: "Duració de la Bateria"
            },
            value: {
              en: "24+ hours on single charge",
              es: "24+ horas con una sola carga",
              ca: "24+ hores amb una sola càrrega"
            }
          }
        ]
      }
    ],
    price: {
      range: {
        en: "€2,500 - €3,200 per device",
        es: "€2,500 - €3,200 por dispositivo",
        ca: "€2,500 - €3,200 per dispositiu"
      },
      note: {
        en: "Prices may vary depending on features and technology level. Discounts available for bilateral fittings. Contact us for accurate pricing.",
        es: "Los precios pueden variar según las características y el nivel de tecnología. Descuentos disponibles para adaptaciones bilaterales. Contáctenos para precios precisos.",
        ca: "Els preus poden variar segons les característiques i el nivell de tecnologia. Descomptes disponibles per a adaptacions bilaterals. Contacta'ns per a preus precisos."
      }
    },
    images: [
      "/images/brands/oticon/oticon-real-1.jpg",
      "/images/brands/oticon/oticon-real-2.jpg",
      "/images/brands/oticon/oticon-real-3.jpg"
    ]
  },
  // Additional models would be defined here
  {
    id: 'more',
    name: 'Oticon More™',
    heroImage: '/images/brands/oticon/oticon-more.jpg',
    description: {
      en: 'Designed to work with your brain to help you hear better in challenging environments.',
      es: 'Diseñado para trabajar con tu cerebro y ayudarte a escuchar mejor en entornos desafiantes.',
      ca: 'Dissenyat per treballar amb el teu cervell per ajudar-te a escoltar millor en entorns desafiants.'
    },
    longDescription: {
      en: [
        "Oticon More™ is a revolutionary hearing aid that gives the brain more of the relevant sounds it needs to make better sense of sound.",
        "It features a Deep Neural Network (DNN) that has been trained with 12 million real-life sound scenes, enabling it to recognize virtually all types of sounds, their details, and how they should ideally sound.",
        "With Oticon More™, you get a more complete sound picture that helps your brain interpret sounds more easily."
      ],
      es: [
        "Oticon More™ es un audífono revolucionario que proporciona al cerebro más de los sonidos relevantes que necesita para dar más sentido al sonido.",
        "Cuenta con una Red Neuronal Profunda (DNN) que ha sido entrenada con 12 millones de escenas sonoras de la vida real, lo que le permite reconocer prácticamente todos los tipos de sonidos, sus detalles y cómo deberían sonar idealmente.",
        "Con Oticon More™, obtienes una imagen sonora más completa que ayuda a tu cerebro a interpretar los sonidos con mayor facilidad."
      ],
      ca: [
        "Oticon More™ és un audiòfon revolucionari que proporciona al cervell més dels sons rellevants que necessita per donar més sentit al so.",
        "Compta amb una Xarxa Neuronal Profunda (DNN) que ha estat entrenada amb 12 milions d'escenes sonores de la vida real, el que li permet reconèixer pràcticament tots els tipus de sons, els seus detalls i com haurien de sonar idealment.",
        "Amb Oticon More™, obtens una imatge sonora més completa que ajuda el teu cervell a interpretar els sons amb major facilitat."
      ]
    },
    features: [
      {
        title: "MoreSound Intelligence",
        description: {
          en: "Scans and analyzes sounds to create a clear contrast between them.",
          es: "Escanea y analiza los sonidos para crear un contraste claro entre ellos.",
          ca: "Escaneja i analitza els sons per crear un contrast clar entre ells."
        }
      },
      {
        title: "MoreSound Amplifier",
        description: {
          en: "Rapid and precise amplification that follows changes in the soundscape.",
          es: "Amplificación rápida y precisa que sigue los cambios en el paisaje sonoro.",
          ca: "Amplificació ràpida i precisa que segueix els canvis en el paisatge sonor."
        }
      },
      {
        title: "MoreSound Optimizer",
        description: {
          en: "Prevents feedback before it occurs for uninterrupted, clear sound.",
          es: "Previene la retroalimentación antes de que ocurra para un sonido claro e ininterrumpido.",
          ca: "Prevé la retroalimentació abans que ocorri per a un so clar i ininterromput."
        }
      }
    ],
    specifications: [
      {
        category: {
          en: "Connectivity",
          es: "Conectividad",
          ca: "Connectivitat"
        },
        items: [
          {
            label: {
              en: "Bluetooth",
              es: "Bluetooth",
              ca: "Bluetooth"
            },
            value: {
              en: "Yes (2.4 GHz)",
              es: "Sí (2.4 GHz)",
              ca: "Sí (2.4 GHz)"
            }
          },
          {
            label: {
              en: "Mobile App",
              es: "Aplicación Móvil",
              ca: "Aplicació Mòbil"
            },
            value: {
              en: "Oticon ON App",
              es: "Aplicación Oticon ON",
              ca: "Aplicació Oticon ON"
            }
          }
        ]
      },
      {
        category: {
          en: "Battery",
          es: "Batería",
          ca: "Bateria"
        },
        items: [
          {
            label: {
              en: "Type",
              es: "Tipo",
              ca: "Tipus"
            },
            value: {
              en: "Lithium-ion rechargeable",
              es: "Recargable de iones de litio",
              ca: "Recarregable d'ions de liti"
            }
          },
          {
            label: {
              en: "Battery Life",
              es: "Duración de la Batería",
              ca: "Duració de la Bateria"
            },
            value: {
              en: "24+ hours on single charge",
              es: "24+ horas con una sola carga",
              ca: "24+ hores amb una sola càrrega"
            }
          }
        ]
      }
    ],
    price: {
      range: {
        en: "€2,300 - €3,000 per device",
        es: "€2,300 - €3,000 por dispositivo",
        ca: "€2,300 - €3,000 per dispositiu"
      },
      note: {
        en: "Prices may vary depending on features and technology level. Discounts available for bilateral fittings. Contact us for accurate pricing.",
        es: "Los precios pueden variar según las características y el nivel de tecnología. Descuentos disponibles para adaptaciones bilaterales. Contáctenos para precios precisos.",
        ca: "Els preus poden variar segons les característiques i el nivell de tecnologia. Descomptes disponibles per a adaptacions bilaterals. Contacta'ns per a preus precisos."
      }
    },
    images: [
      "/images/brands/oticon/oticon-more-1.jpg",
      "/images/brands/oticon/oticon-more-2.jpg",
      "/images/brands/oticon/oticon-more-3.jpg"
    ]
  }
];

const OticonModelDetail: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const { language } = useLanguage();
  const model = id ? getModelById(id) : undefined;

  if (!model) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">{sharedContent.notFound[language]}</h1>
            <Link 
              to={`/${language}/products/oticon-models`} 
              className="text-[#55afa9] hover:underline flex items-center justify-center gap-2"
            >
              <ChevronLeft size={20} />
              {sharedContent.backToModels[language]}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{model.name} | Looptica</title>
        <meta name="description" content={model.description[language]} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://www.looptica.com/${language}/products/oticon-models/${id}`} />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link 
              to={`/${language}/products/oticon-models`} 
              className="text-[#55afa9] hover:underline flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              {sharedContent.backToModels[language]}
            </Link>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={model.heroImage}
                  alt={model.name}
                  className="w-full h-80 object-contain p-4"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                    e.currentTarget.style.filter = 'blur(8px)';
                    e.currentTarget.style.opacity = '0.8';
                  }}
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
                <p className="text-lg text-gray-700 mb-6">{model.description[language]}</p>
                
                <div className="prose prose-lg">
                  {model.longDescription[language].map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#f0fbfa] rounded-lg border border-[#cceeed]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sharedContent.price[language]}</h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">{model.price.range[language]}</p>
                  <p className="text-sm text-gray-600">{model.price.note[language]}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{sharedContent.features[language]}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {model.features.map((feature, idx) => (
                  <Card key={idx} className="bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description[language]}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{sharedContent.specifications[language]}</h2>
              {model.specifications.map((spec, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-medium mb-4">{spec.category[language]}</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">{/* Empty for label */}</TableHead>
                        <TableHead>{/* Empty for value */}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {spec.items.map((item, itemIdx) => (
                        <TableRow key={itemIdx}>
                          <TableCell className="font-medium">{item.label[language]}</TableCell>
                          <TableCell>{item.value[language]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">{sharedContent.gallery[language]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {model.images.map((image, idx) => (
                  <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={image}
                      alt={`${model.name} view ${idx + 1}`}
                      className="w-full h-64 object-contain p-4"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                        e.currentTarget.style.filter = 'blur(8px)';
                        e.currentTarget.style.opacity = '0.8';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-lg shadow-md p-8 text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">{sharedContent.appointment.title[language]}</h3>
              <p className="text-gray-700 mb-6">{sharedContent.appointment.description[language]}</p>
              <GoogleCalendarButton
                subject={`Oticon ${model.name} Consultation at Looptica`}
                description={`I'm interested in learning more about Oticon ${model.name} hearing aids.`}
                className="mx-auto"
              >
                {sharedContent.appointment.button[language]}
              </GoogleCalendarButton>
            </div>
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp 
        phoneNumber="34699594064"
        accountName="Looptica"
        statusMessage={sharedContent.whatsapp.statusMessage[language]}
        chatMessage={sharedContent.whatsapp.chatMessage[language]}
        placeholder={sharedContent.whatsapp.placeholder[language]}
      />
    </div>
  );
};

export default OticonModelDetail;
