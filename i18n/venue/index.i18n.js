import { genI18nMessages } from '~/utils/i18n.utils'
export default genI18nMessages({
    'en-us': {
        title: 'Venue Information',
        og: {
            title: 'Venue Information',
            description:
                'PyCon Taiwan 2023 will be held at the Humanities and Social Science Building, Academia Sinica, with a focus on the latest technology and best practices in Python. The open-source community will bring high-quality speeches and workshops, providing valuable learning and networking opportunities for both novice and experienced Python developers.',
        },
        venueInfo: {
            name: 'Humanities and Social Science Building, Academia Sinica',
            address:
                'No. 128, Sec. 2, Academia Rd., Nankang, Taipei 115, Taiwan',
        },
        transMode: {
            car: 'By Car',
            publicTransport: 'By Public Transport',
            shuttleService: 'Shuttle Service',
        },
        carInstructions: {
            title: 'Driving',
            footerTitle: 'Parking',
            description: 'Navigate to {0},',
            destination: 'Academia Sinica',
            description1:
                'Exiting the Donghu Interchange on the Sun Yat-sen Freeway, pass the Nanhu Lake Bridge, and then proceed along Academia Rd.',
            description2:
                'Exiting the Nangang Interchange on National Highway No.3, proceed along Nansen Road, turn left onto Jiuzhuang Road, and proceed along Academia Rd.',
            description3:
                'From the Nangang exit of HuanDong Boulevard, proceed along Academia Rd.',
        },
        parkingInfo: {
            title: 'Parking Info',
            car: {
                title: 'Car',
                parkingPlace: 'Humanities and Social Science Building (HSSB)',
                description:
                    'Parking spaces are available within the Academia Sinica. Upon entering the campus, drivers should present their identification to the main gate security guard and obtain a parking permit.',
            },
            motor: {
                title: 'Motorcycle',
                description:
                    'Motorcycles are not allowed to enter Academia Sinica. There are free motorcycle parking lots (not responsible for safekeeping) for staff and visitors provided next to {0}, {1}, and {2}.',
                descriptionLinkTitle1: 'the right side of the main gate',
                descriptionLinkTitle2: 'the vacant lot opposite the gate',
                descriptionLinkTitle3: 'Hu Shih Graveyard Park',
            },
            moreInfo:
                '※ For detailed information regarding parking, please refer to {0}',
            moreInfoLinkTitle: 'Academia Sinica Announcement',
        },
        publicTransport: {
            title: 'From Taoyuan Intl. Airport',
            taxi: {
                title: 'Taxi',
                description:
                    'Taxis can also be taken instead of buses, costing around NT$100. Based on past experience, many people choose this option, so sharing a taxi from the MRT station is a good idea.',
            },
            bus: {
                title: 'Passenger bus',
                description:
                    "To reach Academia Sinica, you can take buses 205, 212, 212 (212 Express), 270, 270 (270 Shuttle), 276, 306, 306 (306 Shuttle), 620, 645, 645 (645 Sub), S1, S12, 小 12 (S12 Shuttle), S5, or 藍 25 (Blue 25), and get off at Academia Sinica Station. From there, it's approximately an 8-minute walk to your destination.",
            },
            uBike: {
                link: {
                    description1: 'official YouBike website',
                    description2: 'OpenCycleMap',
                },
                description1:
                    'There are several YouBike (Taipei’s bike-sharing program) rental stations near Academia Sinica.For more information about the YouBike routes in the vicinity, you can visit the  {0} and {1}，It is recommended to check the available docking stations on the app to return the bike. {2}Cycling time from Nangang Station or Nangang Exhibition Center Station to Academia Sinica is approximately 10-15 minutes',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0: Humanities and Social Science Building',
                    park2: 'YouBike 2.0: Academia Sinica Gymnasium (East)',
                    park3: 'YouBike 2.0: Academia Sinica (Jiuzhuang St. Intersection)',
                    park4: 'YouBike 2.0: Academia Park',
                    park5: 'YouBike 2.0: Dr. Hu Shih Par',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0} — Approximately a 10-minute walk',
                    park4: '{0} — Approximately a 12-minute walk',
                    park5: '{0} — Approximately a 13-minute walk',
                },
                title: 'Youbike Nearby rental stations',
            },
        },
        publicTransportInfo: {
            title: 'Public transportation',
            info: 'You can take the {0} to travel between Nangang Exhibition Center and Terminal 1 and Terminal 2 of Taoyuan International Airport.',
            '1843infoTitle': '{0} Route Information:',
            publicTransport: 'Kuo-Kuang Bus 1843',
            description1:
                'Route: Taiwan Taoyuan Airport Terminal 1 -> Taiwan Taoyuan Airport Terminal 2 -> MRT Gangqian Station -> Ruiguang Road -> Neihu Administrative Center -> MRT Nangang Exhibition Center Station (Nangang Rd.) -> Nangang Bus Station (West)',
            description2: {
                title: 'Bus platform location:',
                info1: 'Terminal I: B1 bus area of Arrivals Hall',
                info2: 'Terminal II: Outdoor gallery at East side of 1F Arrivals Hall',
            },
            description3: {
                title: 'Fare (for reference only)：',
                info1: 'Fare: NT$140',
                info2: 'Fare: NT$75',
            },
            description4: 'Schedule: 09:10, 13:10, and 17:20, From Terminal II',
            description5: 'Estimated time: 1 hour with moderate traffic',
            moreInfo: {
                title: 'For more information, please refer to {0} and {1} 。',
                info1: 'the traffic information of Academia Sinica',
                info2: 'the public transportation information of Taoyuan international Airport',
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
                'PyCon Taiwan 2023 將在中央研究院人文社會科學館舉辦，聚焦於 Python 的最新技術和最佳實踐，讓開源社群帶來高品質的演講和工作坊，無論您是 Python 的新手還是資深開發人員，都能在這裡找到有價值的學習和交流機會。',
        },
        venueInfo: {
            name: '中央研究院\n人文社會科學館',
            address: '台北市南港區研究院路 2 段 128 號',
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
            destination: '中央研究院',
            description1:
                '中山高速公路東湖交流道下，過南湖大橋後，接研究院路。',
            description2:
                '北二高南港交流道下，接南深路左轉舊庄路，接研究院路。',
            description3: '環東大道南港出口下，接研究院路。',
        },
        parkingInfo: {
            title: '停車資訊',
            car: {
                title: '汽車',
                parkingPlace: '人文社會科學館',
                description:
                    '中研院內設有停車格，車輛進入院區持證件向大門警衛換證後可駛入院區。',
            },
            motor: {
                title: '機車',
                description:
                    '機車禁止進入中研院院區。於其{0}及{1}、{2}旁均設有機車停車場，供員工和來賓停放不予收費（不負保管責任）。',
                descriptionLinkTitle1: '大門右側',
                descriptionLinkTitle2: '對面空地',
                descriptionLinkTitle3: '胡適公園',
            },
            moreInfo: '※停車相關資訊詳細說明請見 {0}、{1} 。',
            moreInfoLinkTitle: '中央研究院院區車輛通行停放管理施行要點',
            moreInfoLinkTitle2: '中央研究院院區停車 Q&A ',
        },
        publicTransport: {
            title: '桃園國際機場交通資訊',
            taxi: {
                title: '計程車',
                description:
                    '可以搭計程車代替公車，約 NT$ 100 元。 根據過去的經驗，屆時將會有不少人採取此方式，不妨採取計程車共乘由捷運站前往。',
            },
            bus: {
                title: '公車',
                description:
                    '搭乘 205、212、212 直、270、270 區、276、306、306 區、620、645、645 副、小 1、 小 12、小 12 區、 小 5、藍 25，並在中研院站下車，步行約 8 分鐘。',
            },
            uBike: {
                link: {
                    description1: 'YouBike 官方網站',
                    description2: 'OpenCycleMap',
                },
                description1:
                    '中研院週邊亦有不少 YouBike 的租借站。更多 YouBike 附近路線的資訊，可以見 {0} 以及 {1}，建議還車前留意APP上站點可停駐數量。{2}由南港車站或南港展覽館站出發騎乘時間約 10-15 分鐘。',
            },
            uBikePark: {
                parkPlace: {
                    park1: 'YouBike 2.0：中研院人文社會科學館',
                    park2: 'YouBike 2.0：中研院綜合體育館東側',
                    park3: 'YouBike 2.0：研究院舊莊街口',
                    park4: 'YouBike 2.0：中研公園',
                    park5: 'YouBike 2.0： 胡適公園',
                },
                parkingInfo: {
                    park1: '{0}',
                    park2: '{0}',
                    park3: '{0} — 步行約 10 分鐘',
                    park4: '{0} — 步行約 12 分鐘',
                    park5: '{0} — 步行約 13 分鐘',
                },
                title: 'Youbike 附近租賃站點',
            },
        },
        publicTransportInfo: {
            title: '乘車方式',
            info: '可乘坐 {0} 於南港展覽館與桃園機場第一航廈與第二航廈之間往返。',
            '1843infoTitle': '{0} 路線資訊：',
            publicTransport: '國光客運 1843',
            description1:
                '路線：桃園機場第一航廈 → 桃園機場第二航廈 → 捷運港墘站→瑞光路 → 內湖行政中心→捷運南港展覽館站 → 南港轉運站西站（高鐵台鐵）',
            description2: {
                title: '站台位置：',
                info1: '第一航廈：B1 層巴士乘車區。',
                info2: '第二航廈：1F 層巴士乘車區。',
            },
            description3: {
                title: '票價（票價僅供參考）：',
                info1: '全票 NT$140',
                info2: '半票 NT$75',
            },
            description4: '時間：09:10、13:10、17:20，從第二航廈發車',
            description5: '路程時間：一般交通狀況下一小時',
            moreInfo: {
                title: '更多詳細資訊請參考 {0} 以及 {1} 。',
                info1: '中央研究院交通資訊',
                info2: '桃園國際機場公共運輸交通資訊',
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
