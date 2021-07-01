var config = {
    style: 'mapbox://styles/jblumenstock/cknoor5dz2ptl17q9wtzrp7b6?optimize=true',
    accessToken: 'pk.eyJ1IjoiamJsdW1lbnN0b2NrIiwiYSI6ImNqeWdlbTZzNjAwOWUzbW11eXpwMGRxbXcifQ.EiwlyQqbIrUUXMhlUtMx2A',
    // showMarkers: true,
    theme: 'light',
    alignment: 'left',
    toptitle: 'Data Intensive Development Lab',
    title: 'Global Micro-Estimates of Wealth and Poverty',
    byline: 'Research by: Joshua Blumenstock, Guanghua Chi, Han Fang, Sourav Chatterjee, Isabella Smythe \n Visualization by: Joshua Blumenstock, Aishwarya Gunaseelan, Tony di Sera, Dustin Marshall',
    description: 'Many critical policy decisions, from the targeting of anti-poverty programs to strategic investment in infrastructure, hinge on accurate data about wealth and poverty. But many countries lack reliable and up-to-date information on the geographic distribution of wealth.<br><br>At the Data-Intensive Development Lab (DIDL), we’re applying machine learning to “big data” from satellites, mobile phones, and social networks to generate <b>high-resolution poverty maps</b> for all Low and Middle-Income Countries (LMICs). Our hope is that these maps will help government improve the design and targeting of social protection programs, and enable humanitarian organizations to better respond to ongoing and future crises',
    continue: 'Scroll Down to Learn More',
    endingTitle: "VALIDATION, CALIBRATION, AND MORE DETAILS",
    endingText:  "<b>How can these estimates be used in practice?</b><br><br>These estimates are provided <a href=http://didl.berkeley.edu/maps>free for public use</a> in the hope that they enable targeted policy response to humanitarian crises, provide the foundation for new insights into the causes and consequences of economic development and growth, and promote responsible policymaking in support of the Sustainable Development Goals.<br><br>The recent COVID-19 pandemic illustrates an important application where more disaggregated data on the distribution of wealth can <a href=https://www.nature.com/articles/d41586-020-01393-7>improve the targeting of social protections</a> and the efficiency of humanitarian operations. For instance, the Togolese Republic has been using our publicly available poverty estimates to inform the geographic expansion of their emergency COVID-19 aid program. Whereas existing government surveys are only provide poverty estimates that are representative at the regional level (of which there are 5), we provide estimates for 9,770 distinct tiles. When there is a finite budget and a mandate to provide resources to those with the greatest need, disaggregation can help.<br><br>Our hope is that these methods and maps can provide a new set of tools to study economic development and growth, guide interventions, monitor and evaluate policies, and track the elimination of poverty worldwide.<br><br><b>How accurate are these estimates?</b><br><br>To assess the accuracy of these high-resolution wealth estimates, we conducted extensive tests using multiple sources of independent “ground truth” data. All of these tests are described in detail in the <a href=http://www.jblumenstock.com/>academic paper</a> cited below (Chi et al., 2020). To briefly summarize these tests:<ul><li>Using cross-validation, the typical approach used by the machine learning community to assess algorithmic performance, we find that the estimates capture as much as 70% of the actual variation in household-level wealth in LMICs.</li><li>We separately compare the model’s estimates to four independent sources of ground truth data that were never used to build the model (thus eliminating the possibility that the model is “overfit” on its training data). These include census data from 15 countries, nationally-representative household surveys conducted by the governments of Nigeria and the Togolese Republic, and a regional census survey organized by a non-governmental organization in Kenya.</li></ul>To give one example, we construct a “poverty map” for the country of Nigeria, based on the model described above. This poverty map is shown on the left below; we provide an estimate o the average wealth of every ward (the smallest administrative subdivision) in the country. On the right, we show a poverty map built from a recent government survey of 22,000 households -- this survey was completed after the map on the left was constructed. Note that even after surveying 22,000 households, there are still over 50% of wards where no households were surveyed (these are the white regions on the map).",
    endingImage: 'images/highresvtraditional.webp',
    endingText2: "When we look at just the wards that appear in both maps, we find the two estimates are remarkably similar, with a Pearson correlation coefficient of 0.79. This validation exercise (and the many other similar exercises described in the paper) reaffirm our confidence in the accuracy of the estimates.",
    endingImage2: 'images/nlssvsat.jp2',
    endingTitle2: "Want to learn more?",
    endingText3: "The best way to get a feel for the data is to <a href=https://didl.berkeley.edu/maps>explore the interactive interface</a>. There, you can zoom in and out, pan and tilt, search for specific regions, help us identify errors in the estimates, and download the underlying data.<br><br>If you want more information on the science behind these maps, please read the academic paper, “Micro-Estimates of Wealth for the Developing World”. The full citation is below::<ul><li>Chi, G., Chatterjee, S., Fang, H., and Blumenstock, J.E., 2020 (under review). Micro-Estimates of Wealth for the Developing World.</li></ul>If you want to learn more about new approaches to poverty mapping with non-traditional data, take a look at some of the papers on the syllabus of <a href=https://sites.ischool.berkeley.edu/bdd/>Big Data and Development</a> course that Prof. Blumenstock teaches at U.C. Berkeley. In particular, these closely-related papers provide good background:<ul><li>Blumenstock, J., Cadamuro, G., On, R., 2015. <a href=https://science.sciencemag.org/content/350/6264/1073>Predicting poverty and wealth from mobile phone metadata</a>. Science 350, 1073–1076. doi:10.1126/science.aac4420</li><li>Jean, N., Burke, M., Xie, M., Davis, W.M., Lobell, D.B., Ermon, S., 2016. <a href=https://science.sciencemag.org/content/353/6301/790>Combining satellite imagery and machine learning to predict poverty</a>. Science 353, 790–794. </li></ul>Finally, you can learn more about the <a href=http://didl.berkeley.edu>Data-Intensive Development Lab</a> and the <a href=http://cega.berkeley.edu>Center for Effective Global Action</a>, the two research teams at U.C. Berkeley behind this effort.",
    //footer: 'Chi, Guanghua; Fang, Han; Chatterjee, Sourav; Blumenstock, Joshua. 2020. “Micro-Estimates of Wealth for the Developing World.” Working paper available by request.<br>"Combining satellite imagery and machine learning ... - Science." Accessed July 20, 2020. <a href="https://science.sciencemag.org/content/353/6301/790" target="_blank">https://science.sciencemag.org/content/353/6301/790</a>. <br> "Using luminosity data as a proxy for economic statistics | PNAS." Accessed July 20, 2020. <a href="https://www.pnas.org/content/108/21/8589" target="_blank">https://www.pnas.org/content/108/21/8589</a>.<br> "Predicting poverty and wealth from mobile phone ... - Science." Accessed July 20, 2020. <a href="https://science.sciencemag.org/content/350/6264/1073" target="_blank">https://science.sciencemag.org/content/350/6264/1073</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> </a>',
    logos: "images/logos.webp",
    loader: true, 
    loader_time: 3000,
    chapters: [
        {
            id: 'FullMap',
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a> </a>',
            title: 'Global Micro-Estimates of Wealth and Poverty',
            description: 'We have developed interactive maps that make it possible to explore fine-grained estimates of wealth and poverty around the world. The estimates are computed from satellite imagery, internet data, and other non-traditional sources of data.<br><br>The height and color of each grid cell help visualize micro-regional wealth. Cell height indicates absolute wealth (relative to the world), and cell color indicates relative wealth (relative to other regions of the country).<br><br>Scroll down to read more about how it\'s made!',
            location: {
                center: { lon: 30.9725, lat: -29.1729 }, 
                zoom: 9.0,
                pitch: 60,
                bearing: -19.7, 
                speed: 1, 
                curve: .8
            },
            onChapterEnter: [
                {
                    layer: 'Poverty',
                    opacity: 0.75
                }, 
                {
                    layer: 'mapbox-satellite-shown',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'Poverty',
                    opacity: 0
                }, 
                {
                    layer: 'mapbox-satellite-shown',
                    opacity: 0
                }
            ]
        },
            {
                id: 'overLaySurveyedCountries',
                // image: 'images/surveyed_people.png',
                // imageCredit: '<a> </a>',
                title: 'WE START WITH MILLIONS OF “GROUND TRUTH” MEASUREMENTS OF WEALTH',
                description: 'To produce the fine-grained estimates of wealth, we start by establishing  “ground truth” measurements of household wealth. The ground truth measurements are based on face-to-face surveys with millions of individuals around the world.<br><br>For the global poverty maps shown here, we rely on standardized and publicly-available <a href="https://dhsprogram.com" target="_blank">Demographic and Health Surveys</a> collected from roughly 1.5 million households in 56 different Low and Middle-Income Countries.',
                location: {
                    center: { lon: 14.72593, lat: 0.91130 },
                    zoom: 2.73,
                    pitch: 0.00,
                    bearing: 0.00, 
                    speed:.8, 
                    curve: 1
                },
                onChapterEnter: [
                    {
                        layer: 'surveyed_countries',
                        opacity: 0.5
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'surveyed_countries',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'LargeNigeriaZoom',
                description: 'In country-specific engagements, we include additional ground truth surveys collected by national governments and local organizations.<br><br>Each survey takes several hours to complete. Typically, the head of household is asked hundreds of different questions about their livelihoods and quality of life, including dozens of questions that make it possible to assess their socioeconomic status.',
                location: {
                    center: { lon: 4.7, lat: 9.00113 },
                    zoom: 5.49,
                    pitch: 0.00,
                    bearing: 0.00
                },
                onChapterEnter: [
                    {
                        layer: 'survey-locations',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'survey-locations',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'MediaData',
                title: 'We then join together layers of “big data” from satellites, social media, and mobile phones.',
                description: 'For each of the locations where surveys are conducted, we collect several sources of non-traditional “big data” that can be matched to the GPS coordinates of the surveys.<br><br>Rich information can be derived from high-resolution satellite imagery. These aerial photographs contain visual cues about the living conditions of the region such as the quality of roofing material, the size of farm plots, and the quality of roads.',
                location: {
                    center: { lon: 8.3852703, lat: 9.6085155 }, 
                    zoom: 16.74,
                    pitch: 0.00,
                    bearing: 0.00, 
                    speed: 1
                },
                onChapterEnter: [
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'Nightlights',
                description: 'We also source luminosity data, captured from satellites at night. In the luminosity data, wealthier regions tend to glow brighter, providing another visual cue of the socioeconomic status of a micro-region.',
                location: {
                    center: { lon: 3.97906, lat: 7.84728 },
                    zoom: 6.77,
                    pitch: 0.00,
                    bearing: 0.00, 
                    speed: .8, 
                    curve: 1
                },
                onChapterEnter: [
                    //{
                      //  layer: 'terrain',
                        //opacity: 1
                    //},
                    {
                        layer: 'nightlights_bw',
                        opacity: 0.85
                    },
                    {
                        layer: 'nighttime_lights_bw-2',
                        opacity: 0.85
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 0
                    },
                    {
                        layer: 'nightlights_bw',
                        opacity: 0
                    },
                    {
                        layer: 'nighttime_lights_bw-2',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'Topography',
                description: 'We further leverage rich sources of publicly-available geo-spatial data, including topological information on land slope and elevation, road density, human settlements, and other related layers.',
                location: {
                    // center: { lon: 4.7, lat: 9.00113 },
                    // zoom: 5.49,
                    // pitch: 0.00,
                    // bearing: 0.00
                    center: { lon: 9.60045, lat: 6.36860 },
                    zoom: 6.87,
                    pitch: 60.00,
                    bearing: -12.74, 
                    speed: .7, 
                    curve: 1
                },
                onChapterEnter: [
                    {
                        layer: 'terrain',
                        opacity: 0.7
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'terrain',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'Facebook',
                description: 'Through a partnership with Facebook, we also include information on the availability and use of telecommunications infrastructure. Such features include estimates of the number of mobile cellular towers in each grid cell, as well as the number of WiFi access points and the number of mobile devices of different types.<br><br>In country-specific engagements, we integrate anonymized mobile phone metadata. These data, collected by mobile phone companies, can be used to measure the frequency and timing of communication events, the interwoven structure of social networks, patterns of travel and home location, and histories of consumption and expenditure.',
                location: {
                    center: { lon: 4.7, lat: 9.00113 },
                    zoom: 5.49,
                    pitch: 0.00, 
                    bearing: 0.00, 
                    speed: .8, 
                    curve: 1
                },
                onChapterEnter: [
                    {
                        layer: 'nigerian_points',
                        opacity: 1
                    } 
                    // {
                    //     layer: 'unclustered-point',
                    //     opacity: 1
                    // }, 
                    // {
                    //     layer: 'cluster-count',
                    //     opacity: 1
                    // }, 
                    // {
                    //     layer: 'clusters',
                    //     opacity: 1
                    // }    
                ],
                onChapterExit: [
                    {
                        layer: 'nigerian_points',
                        opacity: 0
                    }
                    // {
                    //     layer: 'unclustered-point',
                    //     opacity: 0
                    // }, 
                    // {
                    //     layer: 'cluster-count',
                    //     opacity: 0
                    // }, 
                    // {
                    //     layer: 'clusters',
                    //     opacity: 0
                    // }    
                ]
            },
            {
                id: 'BackToGroundTruth',
                title: 'HAVING COMBINED LOW-RESOLUTION “GROUND TRUTH” WITH HIGH-RESOLUTION “BIG DATA”, WE FILL IN THE GAPS',
                description: 'For millions of micro-regions, we know the wealth of the region (from surveys), and we also have several sources of non-traditional data (from satellites and other sources). We use these matched data to train a supervised machine learning model that predicts wealth from non-traditional data.<br><br>This allows us to produce estimates of the relative wealth and absolute wealth of every micro-region of the earth’s surface. The model “learns” which features are useful in predicting wealth. For instance, villages with good cell phone coverage, and with lots of paved surface, tend to be wealthier.',
                location: {
                    center: { lon: 6.76607, lat: 4.82800 },
                    zoom: 9.11,
                    pitch: 15.00, 
                    bearing: 0.00, 
                    speed: .8, 
                    curve: 1
                },
                onChapterEnter: [
                    {
                        layer: 'Poverty',
                        opacity: 0.75
                    }, 
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'Poverty',
                        opacity: 0
                    }, 
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 0
                    }
                ]
            },
            {
                id: 'ShowProof',
                title: 'THIS METHOD PROVIDES ESTIMATES OF THE WEALTH OF EVERY 2.4KM MICRO-REGION ON THE PLANET',
                description: 'The estimates we produce are available at multiple scales, from the tiniest 2.4km grid cell to the level of states and countries. These estimates are provided free for public use in the hope that they enable targeted policy response to the COVID-19 pandemic, provide the foundation for new insights into the causes and consequences of economic development and growth, and promote responsible policymaking in support of the Sustainable Development Goals.',
                location: {
                    center: { lon: 5.82859, lat: 4.88982 },
                    zoom: 8.04,
                    pitch: 60,
                    bearing: 30.4, 
                    speed: .8, 
                    curve: 1
                },
                onChapterEnter: [
                    {
                        layer: 'Poverty',
                        opacity: 0.75
                    }, 
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 1
                    }
                ],
                onChapterExit: [
                    {
                        layer: 'Poverty',
                        opacity: 0
                    }, 
                    {
                        layer: 'mapbox-satellite-shown',
                        opacity: 0
                    }
                ]
            }
    ]
};
