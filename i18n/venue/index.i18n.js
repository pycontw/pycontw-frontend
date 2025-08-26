import { genI18nMessages } from '~/utils/i18n.utils'
export default genI18nMessages({
    'en-us': {
        title: 'Venue Information',
        og: {
            title: 'Venue Information',
            description:
                'PyCon Taiwan 2025 will be held at Taipei New Horizon 6F, with a focus on the latest technology and best practices in Python. The open-source community will bring high-quality speeches and workshops, providing valuable learning and networking opportunities for both novice and experienced Python developers.',
        },
        venueInfo: {
            name: 'Main Conference Venue (09/06-09/07)\nTaipei New Horizon 6F',
            address:
                'Address: 6F, No. 88, Yanchang Rd, Xinyi District, Taipei City, Taiwan',
        },
        sprintsVenueInfo: {
            name: 'Sprints Venue (09/05)',
            address: 'Address: TBD',
        },
        venueMap: {
            title: 'Venue Map',
        },
        howToGetThere: {
            title: 'How to Get There',
        },
        transportation: {
            mrt: '🚇 By MRT (Taipei Metro)',
            bus: '🚌 By Bus',
            mrtStation1:
                'Sun Yat-Sen Memorial Hall Station (Blue Line, Exit 5)',
            mrtDetail1:
                "Take Exit 5, turn right onto Guangfu South Road, then turn right onto Yanchang Road. It's about a 500-meter walk (approx. 7 minutes).",
            mrtStation2: 'Taipei City Hall Station (Blue Line, Exit 1)',
            mrtDetail2:
                "Take Exit 1 and walk straight along Songgao Road toward Guangfu South Road. It's about a 400-meter walk (approx. 5 minutes).",
            busStation1: 'Sun Yat-Sen Memorial Hall Station (Guangfu Stop)',
            busRoutes1:
                'Bus routes: 204, 278, 278 Shuttle, 282, 288, 672, Chengde Main Line',
            busStation2: 'United Daily News Stop',
            busRoutes2:
                "Bus routes: 202, 212, 212 Night Bus, 212 Express, 232 Express, 240 Express, 270, 299, 600, Ren'ai Main Line, Zhongxiao Main Line",
        },
        transMode: {
            car: 'By Car',
            publicTransport: 'By Public Transport',
            shuttleService: 'Shuttle Service',
        },
        carInstructions: {
            title: 'Driving',
            footerTitle: 'Parking',
            description: 'Navigate to {0}.',
            destination: 'National Science and Technology Museum',
        },
        parkingInfo: {
            title: 'Parking Info',
            car: {
                title: 'Car',
                parkingPlace: 'North Complex',
                parkingPlace2: 'South Complex',
                description:
                    'Paid parking lots are available near the National Science and Technology Museum: {0} Underground parking lot, accessible from the north side of Pingdeng Rd. The parking fee is 25 NTD per half hour on Fridays to Sundays and consecutive holidays, with a maximum of 250 NTD daily. {1} Outdoor parking lot, accessible from the south side of Pingdeng Rd. The parking fee is 25 NTD per half hour on Fridays to Sundays and consecutive holidays, with a maximum of 250 NTD daily.',
            },
            motor: {
                title: 'Motorcycle',
                description:
                    'North Complex Two paid parking lots located at {0}. and {1}. The fee is 20 NTD per entry, additional charges apply for re-entry or overnight parking. {2} One paid parking lot, accessible from the south side of Pingdeng Rd. The fee is 20 NTD per entry, additional charges apply for re-entry or overnight parking.',
                descriptionLinkTitle1: 'Liming Rd',
                descriptionLinkTitle2: 'Juemin Rd',
                descriptionLinkTitle3: 'South Complex',
            },
            moreInfo:
                '※ For detailed information regarding parking, please refer to {0}',
            moreInfoLinkTitle:
                'the parking information of National Science and Technology Museum.',
        },
        publicTransport: {
            title: 'Taiwan Kaohsiung International Airport',
            taxi: {
                title: 'Taxis',
                description:
                    'Taxis can also be taken instead of buses. Based on past experience, many people choose this option, so sharing a taxi from the Railway station or Light Rail station is a good idea.',
            },
            bus: {
                title: 'Passenger bus',
                description:
                    'Red28 (Extend), Red28, 60 Jyuemin Main Line, 60 Jyuemin Main Line (Interval), 73, 37,  76, 77, 81, 168W Main Line, 168E Main Line, 8503',
            },
            uBike: {
                link: {
                    description1: 'official YouBike website',
                },
                description1:
                    'There are several YouBike rental stations near the National Science and Technology Museum. For more information about the YouBike routes in the vicinity, you can visit the {0}. It is recommended to check the available docking stations on the app to return the bike. Cycling time from Taiwan Railway-Science and Technology Museum Station or Light Rail-C30 Science and Technology Museum to the National Science and Technology Museum (South Complex） is approximately 5-10 minutes.',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0: Science and Technology Museum',
                    park2: 'YouBike 2.0: National Science and Technology Museum',
                    park3: 'YouBike 2.0: Tiedao 1st St.  and Ln. 138, Xianzheng Rd. Intersection',
                    park4: 'YouBike 2.0: PingdengJiouru 1st Rd. Intersection',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0} —  Approximately a 10-minute walk.',
                    park4: '{0} —  Approximately a 10-minute walk.',
                },
                title: 'Youbike Nearby rental stations',
            },
        },
        publicTransportInfo: {
            title: 'Public transportation',
            description1:
                'Take the MRT Red Line from Kaohsiung International Airport (R4) to Kaohsiung Main Station (R11) and then take the train to Science and Technology Museum Station.  Walk approximately 15 min to arrive at the museum.',
            description2:
                'Take the MRT Red Line from Kaohsiung International Airport (R4) to Kaohsiung Main Station (R11) and then take Bus Red 28 to the National Science and Technology Museum.。',
            moreInfo: {
                title: '※ For more information, please refer to {0}。',
                info1: 'the traffic information of National Science and Technology Museum.',
            },
        },
        shuttleService: {
            shuttleTime: {
                day2: {
                    to: 'Return | HSSB → Nangang 17:30-18:30 (the last bus at 18:10)',
                    from: 'Departure | Nangang → HSSB 08:30-09:30 (the last bus at 09:10)',
                    title: '2023-09-03 (Day 2)',
                },
                title: 'Schedule',
                day1: {
                    title: '2023-09-02 (Day 1)',
                    from: 'Departure | Nangang → HSSB 09:15-10:15 (the last bus at 10:00)',
                    to: 'Return | HSSB → Nangang 18:00-21:00 (the last bus at 20:40)',
                },
            },
            title: 'Shuttle Service',
            description:
                'Shuttle buses will be provided between {0} and HSSB during the two-day event. Attendees are welcome to use this service.',
            descriptionLink: 'Nangang Station (BL22, Exit 1)',
        },
    },
    'zh-hant': {
        title: '會場資訊',
        og: {
            title: '會場資訊',
            description:
                'PyCon Taiwan 2025 將在台北文創六樓舉辦，聚焦於 Python 的最新技術和最佳實踐，讓開源社群帶來高品質的演講和工作坊，無論您是 Python 的新手還是資深開發人員，都能在這裡找到有價值的學習和交流機會。',
        },
        venueInfo: {
            name: '主要研討會場地 (09/06-09/07)\n台北文創六樓',
            address: '地址: 台北市信義區菸廠路 88 號 6 樓（誠品生活松菸店內）',
        },
        sprintsVenueInfo: {
            name: 'Sprints 場地 (09/05)',
            address: '地址: TBD',
        },
        venueMap: {
            title: '會場地圖',
        },
        howToGetThere: {
            title: '交通指引',
        },
        transportation: {
            mrt: '🚇 捷運 | By MRT (Taipei Metro)',
            bus: '🚌 公車 | By Bus',
            mrtStation1: '捷運國父紀念館站（板南線，5號出口）',
            mrtDetail1:
                '從 5 號出口出站後，右轉光復南路，再右轉菸廠路，步行約 500 公尺，約 7 分鐘。',
            mrtStation2: '捷運市政府站（板南線，1號出口）',
            mrtDetail2:
                '從 1 號出口出站後，沿松高路直行，步行約 400 公尺，約 5 分鐘即可抵達。',
            busStation1: '國父紀念館站（光復南路）',
            busRoutes1: '公車路線：204、278、278區、282、288、672、承德幹線',
            busStation2: '聯合報站',
            busRoutes2:
                '公車路線：202、212、212夜、212直、232快、240直、270、299、600、仁愛幹線、忠孝幹線',
        },
        transMode: {
            car: '自行開車',
            publicTransport: '大眾運輸工具',
            shuttleService: '大會接駁車',
        },
        carInstructions: {
            title: '開車',
            footerTitle: '停車',
            description: '導航至{0}',
            destination: '科工館南館',
        },
        parkingInfo: {
            title: '停車資訊',
            car: {
                title: '汽車',
                parkingPlace: '北館',
                parkingPlace2: '南館',
                description:
                    '科工館週邊設有付費停車場：{0}設有地下停車場，由平等路北側（7-11 對面）進入。週五至週日及連續假日每半小時收費 25 元，每日最高上限 250 元。{1} 設有戶外停車場，由平等路南側進入。週五至週日及連續假日每半小時收費 25 元，每日最高上限 250 元。',
            },
            motor: {
                title: '機車',
                description:
                    '北館 設有 {0} 與 {1} 兩處停車場。每次收費 20 元，離場再停車或跨日則另計次收費。{2} 設有付費機車停車場乙處，由平等路南側進入。每次收費 20 元，離場再停車或跨日則另計次收費。',
                descriptionLinkTitle1: '禮明路',
                descriptionLinkTitle2: '覺民路',
                descriptionLinkTitle3: '南館',
            },
            moreInfo: '※ 停車相關資訊詳細說明請見 {0}。',
            moreInfoLinkTitle: '國立科學工藝博物館交通資訊',
        },
        publicTransport: {
            title: '高雄國際機場交通資訊',
            taxi: {
                title: '計程車',
                description:
                    '可以搭計程車代替公車。根據過去的經驗，屆時將會有不少人採取此方式，不妨採取計程車共乘由火車站、輕軌站前往。',
            },
            bus: {
                title: '公車',
                description:
                    '紅 28 繞中都濕地公園、紅 28、紅 28 公車式小黃、60 覺民幹線、60 覺民幹線區間車、73、37、 76、77、81、168 環西幹線、168 環西幹線區間車、168 環東幹線、168 環東幹線區間車、8503',
            },
            uBike: {
                link: {
                    description1: 'YouBike 官方網站',
                    description2: 'OpenCycleMap',
                },
                description1:
                    '科工館週邊亦有不少 YouBike 的租借站。更多 YouBike 附近路線的資訊，可以見 {0}，建議還車前留意 APP 上站點可停。由台鐵科工館站或輕軌科工館出發騎乘時間約 5-10 分鐘。',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0：科工館',
                    park2: 'YouBike 2.0：平等九如一路口',
                    park3: 'YouBike 2.0：鐵道憲政 139 巷口',
                    park4: 'YouBike 2.0：國立科學工藝博物館',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0} — 步行約 10 分鐘',
                    park4: '{0} — 步行約 10 分鐘',
                },
                title: 'Youbike 附近租賃站點',
            },
        },
        publicTransportInfo: {
            title: '乘車方式',
            description1:
                '高雄捷運紅線「高雄國際機場站 (R4)」搭乘至「高雄車站 (R11)」，轉乘台鐵至「科工館車站」下車，步行約 10 分鐘至本館。',
            description2:
                '搭乘高雄捷運紅線至「高雄車站 (R11)」，轉搭 60 號公車（覺民幹線）至科工館站即可抵達。',
            moreInfo: {
                title: '※ 更多詳細資訊請參考 {0}。',
                info1: '國立科學工藝博物館交通資訊',
            },
        },
        shuttleService: {
            title: '會場接駁',
            description:
                '會期兩天早上有提供從 {0} 到人文社會科學館的接駁車，晚上議程結束後也有回程接駁，歡迎會眾們使用。',
            descriptionLink: '捷運南港站一號出口',
            shuttleTime: {
                title: '接駁時間',
                day1: {
                    title: '2023-09-02 (Day 1)',
                    from: '去程｜南港火車站 → 人文社會科學館：09:15-10:15（末班 10:00）',
                    to: '回程｜人文社會科學館 → 南港火車站：18:00-21:00（末班 20:40）',
                },
                day2: {
                    title: '2023-09-03 (Day 2)',
                    from: '去程｜南港火車站 → 人文社會科學館：08:30-09:30（末班 09:10）',
                    to: '回程｜人文社會科學館 → 南港火車站：17:30-18:30（末班 18:10）',
                },
            },
        },
    },
})
