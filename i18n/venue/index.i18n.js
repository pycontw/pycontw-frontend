import { genI18nMessages } from '~/utils/i18n.utils'
export default genI18nMessages({
    'en-us': {
        title: 'Venue Information',
        og: {
            title: 'Venue Information',
            description:
                'PyCon Taiwan 2025 will be held at Taipei New Horizon (Songshan Cultural and Creative Park), with a focus on the latest technology and best practices in Python. The open-source community will bring high-quality speeches and workshops, providing valuable learning and networking opportunities for both novice and experienced Python developers.',
        },
        venueInfo: {
            name: 'Taipei New Horizon, 6F',
            address:
                '6F, No. 88, Yanchang Rd, Xinyi District, Taipei City, Taiwan',
        },
        sprintInfo: {
            title: 'Sprints Location',
        },
        venueMap: {
            title: 'Venue Map',
        },
        transMode: {
            car: 'By Car',
            publicTransport: 'By Public Transport',
        },
        carInstructions: {
            title: 'Driving',
            footerTitle: 'Parking',
            description: 'Navigate to {0}.',
            destination: 'Taipei New Horizon',
        },
        parkingInfo: {
            title: 'Parking Info',
            car: {
                title: 'Car',
                parkingPlace: 'Taipei New Horizon Building',
                parkingPlace2: 'Nearby Public Parking',
                description:
                    'Traffic is heavy on holidays, so please make use of public transportation whenever possible!\nVehicles should enter via Yanchang Road (located at the intersection of Guangfu South Road and Civic Boulevard). Lane 553, Zhongxiao East Road does not connect to Yanchang Road.\n\n• The building has an underground paid parking lot: approximately 500 car spaces\n\n• Car parking: Weekdays NT$50 / 30 minutes; Holidays NT$70 / 30 minutes\n\n',
            },
            motor: {
                title: 'Scooter',
                description:
                    'Traffic is heavy on holidays, so please make use of public transportation whenever possible!\nVehicles should enter via Yanchang Road (located at the intersection of Guangfu South Road and Civic Boulevard). Lane 553, Zhongxiao East Road does not connect to Yanchang Road.\n\n• The building has an underground paid parking lot: approximately 1,000 scooter spaces\n\n• Scooter parking: NT$20 per entry',
                descriptionLinkTitle1: 'the venue',
                descriptionLinkTitle2: 'Cultural Park',
                descriptionLinkTitle3: 'surrounding area',
            },
            moreInfo:
                '※ For detailed information regarding parking, please refer to {0}',
            moreInfoLinkTitle:
                'the parking information of Songshan Cultural and Creative Park.',
        },
        publicTransport: {
            title: 'MRT and Bus Information',
            taxi: {
                title: 'Taxi',
                description:
                    'You can take a taxi directly to Taipei New Horizon or Songshan Cultural and Creative Park. Taxi stands are numerous and transportation is convenient.',
            },
            bus: {
                title: 'Bus',
                description:
                    '• Direct Bus + Walking\nMany bus options available. Take the following bus routes and get off at Sun Yat-Sen Memorial Hall Station or nearby stops: Sun Yat-Sen Memorial Hall Station (Guangfu South Road): 204, 278, 278A, 282, 288, 672, Chengde Line. United Daily News Stop (Zhongxiao East Road): 202, 212, 212 Night, 212 Express, 232 Express, 240 Express, 270, 299, 600, Renai Line, Zhongxiao Line. Walk to the Cultural and Creative Park after getting off.',
            },
            mrt: {
                title: 'MRT',
                description:
                    '• MRT Line + Walking (Sun Yat-Sen Memorial Hall Station)\nTake the MRT Bannan Line to Sun Yat-Sen Memorial Hall Station. Exit from Exit 5, walk along Guangfu South Road, turn into Yanchang Road to enter the park. This route is close to multiple bus lines, and bus stops such as Sun Yat-Sen Memorial Hall Station Guangfu Road Intersection can also be reached by bus.',
            },
            uBike: {
                link: {
                    description1: 'official YouBike website',
                    description2: 'OpenCycleMap',
                },
                description1:
                    '• There are several YouBike rental stations near Taipei New Horizon and Songshan Cultural and Creative Park. For more information about YouBike routes, visit {0}. It is recommended to check available docking stations on the app before returning the bike.',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0: Taipei New Horizon (Yanchang Road)',
                    park2: 'YouBike 2.0: Songshan Cultural and Creative Park (Warehouse No. 1)',
                    park3: 'YouBike 2.0: Sun Yat-Sen Memorial Hall Station (Exit 2)',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0}',
                },
                title: 'YouBike Nearby Rental Stations',
            },
        },
        publicTransportInfo: {
            title: 'Public Transportation',
            description1:
                'Take MRT Blue Line to Sun Yat-Sen Memorial Hall Station (about 5 minutes ride, 5 minutes walk), then walk about 7 minutes to the venue. Or take MRT Blue Line to City Hall Station (about 4 minutes ride, 4 minutes walk), then walk about 5 minutes to the venue. MRT fare: approximately NT$20-30.',
            description2:
                'Multiple bus transfers available. During rush hours, take Exit 3 to the venue (about 7 minutes), transfer to Orange Line to Exit 6 (about 12 minutes walk), walk about 2-3 minutes, transfer to Orange Line (22 minutes). Bus fare: NT$15.',
            moreInfo: {
                title: '※ For more information, please refer to {0}.',
                info1: 'Songshan Cultural and Creative Park traffic information.',
            },
        },
    },
    'zh-hant': {
        title: '會場資訊',
        og: {
            title: '會場資訊',
            description:
                'PyCon Taiwan 2025 將在台北文創舉辦，聚焦於 Python 的最新技術和最佳實踐，讓開源社群帶來高品質的演講和工作坊，無論您是 Python 的新手還是資深開發人員，都能在這裡找到有價值的學習和交流機會。',
        },
        venueInfo: {
            name: '台北文創 6F',
            address: '台北市信義區菸廠路 88 號 6 樓',
        },
        sprintInfo: {
            title: 'Sprints 地點',
        },
        venueMap: {
            title: '會場地圖',
        },
        transMode: {
            car: '自行開車',
            publicTransport: '大眾運輸',
        },
        carInstructions: {
            title: '開車',
            footerTitle: '停車',
            description: '導航至{0}',
            destination: '台北文創',
        },
        parkingInfo: {
            title: '停車資訊',
            car: {
                title: '汽車',
                parkingPlace: '台北文創大樓',
                parkingPlace2: '週邊公有停車場',
                description:
                    '假日車流多，請多利用大眾交通工具！\n車輛請由「菸廠路」駛入（位於光復南路與市民大道交叉口），忠孝東路553巷無法通往菸廠路。\n\n• 大樓設有地下收費停車場：汽車約500格\n\n• 汽車收費：平日＄50元/半小時；假日＄70元/半小時\n\n',
            },
            motor: {
                title: '機車',
                description:
                    '假日車流多，請多利用大眾交通工具！\n車輛請由「菸廠路」駛入（位於光復南路與市民大道交叉口），忠孝東路553巷無法通往菸廠路。\n\n• 大樓設有地下收費停車場：機車約1000格\n\n• 機車收費：每次＄20元',
                descriptionLinkTitle1: '會場',
                descriptionLinkTitle2: '文創園區',
                descriptionLinkTitle3: '周邊區域',
            },
            moreInfo: '※ 停車相關資訊詳細說明請見 {0}。',
            moreInfoLinkTitle: '台北文創交通資訊',
        },
        publicTransport: {
            title: '捷運公車資訊',
            taxi: {
                title: '計程車',
                description:
                    '可直接搭乘計程車前往台北文創或台北文創。計程車招呼站眾多，交通便利。',
            },
            bus: {
                title: '公車',
                description:
                    '• 公車直達＋步行\n公車選擇多，搭乘以下公車路線在捷運國父紀念館站或附近站點下車：國父紀念館站(光復南路)公車：204、278、278區、282、288、672、承德幹線 聯合報站（忠孝東路）公車：202、212、212夜、212直、232快、240直、270、299、600、仁愛幹線、忠孝幹線下車後步行至文創園區。',
            },
            mrt: {
                title: '捷運',
                description:
                    '• 捷運路線＋步行（國父紀念館站）\n搭乘捷運板南線至國父紀念館站 從 5 號出口出站，沿光復南路步行，轉入菸廠路進入園區。此路線靠近多條公車路線，公車站點如國父紀念館站光復路口也可搭乘公車抵達。',
            },
            uBike: {
                link: {
                    description1: 'YouBike 官方網站',
                    description2: 'OpenCycleMap',
                },
                description1:
                    '• 台北文創及台北文創週邊有多處 YouBike 租借站。更多 YouBike 路線資訊請見 {0}，建議還車前先透過 APP 確認站點可停車數量。',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0：台北文創大樓（菸廠路）',
                    park2: 'YouBike 2.0：台北文創（一號倉庫）',
                    park3: 'YouBike 2.0：捷運國父紀念館站（2號出口）',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0}',
                },
                title: 'YouBike 附近租賃站點',
            },
        },
        publicTransportInfo: {
            title: '乘車方式',
            description1:
                '搭乘捷運藍線至國父紀念館站（搭乘約5分鐘、步行約5分鐘），走路約7分鐘到會場。或搭乘捷運藍線至市政府站（搭乘約4分鐘、步行約4分鐘），走路約5分鐘到會場。捷運票價約$20-30。',
            description2:
                '公車轉乘很多。通勤尖峰時段，搭乘捷運3號出口到會場約7分鐘，轉乘捷運橘線到6號出口步行約12分鐘，步行約2-3分鐘，轉乘橘線到22分鐘。公車票價：$15。',
            moreInfo: {
                title: '※ 更多詳細資訊請參考 {0}。',
                info1: '台北文創交通資訊',
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
