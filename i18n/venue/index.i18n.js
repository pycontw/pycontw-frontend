import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Venue Information',
        og: {
            title: 'Venue Information',
            description:
                'PyCon Taiwan 2023 will be held at the Humanities and Social Science Building, Academia Sinica' +
                ', with a focus on the latest technology and best practices in Python. The open-source community' +
                ' will bring high-quality speeches and workshops, providing valuable learning and networking' +
                ' opportunities for both novice and experienced Python developers.',
        },
        venueInfo: {
            name: 'Humanities and Social Science Building, Academia Sinica',
            address:
                'No. 128, Sec. 2, Academia Rd., Nankang, Taipei 115, Taiwan',
        },
        transMode: {
            car: 'By Car',
            publicTransport: 'By Public Transport',
        },
        carInstructions: {
            title: 'Driving',
            footerTitle: 'Parking',
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
                description:
                    'The underground parking lot (B2) in the Humanities and Social Science Building is available for cars. ' +
                    'Upon entering the campus, drivers should present their identification to the main gate security guard' +
                    ' and obtain a parking permit. The parking fee is NT$20 per hour.',
            },
            motor: {
                title: 'Motorcycle',
                description:
                    'Motorcycles are not allowed to enter Academia Sinica. There are free motorcycle parking lots (not' +
                    ' responsible for safekeeping) for staff and visitors provided next to {0}, {1}, and {2}.',
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
                    'Taxis can also be taken instead of buses, costing around NT$100.' +
                    ' Based on past experience, many people choose this option,' +
                    ' so sharing a taxi from the MRT station is a good idea.',
            },
            uBike: {
                link: {
                    description1: 'official YouBike website',
                    description2: 'OpenCycleMap',
                },
                description1:
                    'There are several YouBike (Taipei’s bike-sharing program) rental stations near Academia Sinica.' +
                    'For more information about the YouBike routes in the vicinity, you can visit the  {0} and {1}，' +
                    'It is recommended to check the available docking stations on the app to return the bike. {2}' +
                    'Cycling time from Nangang Station or Nangang Exhibition Center Station to Academia Sinica is approximately 10-15 minutes',
            },
        },
        publicTransportInfo: {
            title: 'Way of Transportation',
            info:
                'You can take the Kuo-Kuang Bus 1843 to travel between Nangang Exhibition' +
                ' Center and Terminal 1 and Terminal 2 of Taoyuan International Airport.',
            '1843infoTitle': 'Kuo-Kuang Bus 1843 Route Information:',
            description1:
                'Route: Taiwan Taoyuan Airport Terminal 1 ->' +
                ' Taiwan Taoyuan Airport Terminal 2 -> MRT Gangqian Station' +
                ' -> Ruiguang Road -> Neihu Administrative Center ->' +
                ' MRT Nangang Exhibition Center Station (Nangang Rd.) -> Nangang Bus Station (West)',
            description2:
                'Bus platform location: Terminal I: B1 bus area of' +
                ' Arrivals Hall Terminal II: Outdoor gallery at East side of 1F Arrivals Hall',
            description3:
                'Fare (for reference only)：Full Fare: NT$140，Half Fare: NT$75',
            description4: 'Schedule: 09:10, 13:10, and 17:20',
            description5: 'Estimated time: 1 hour with moderate traffic',
        },
    },
    'zh-hant': {
        title: '會場資訊',
        og: {
            title: '會場資訊',
            description:
                'PyCon Taiwan 2023 將在中央研究院人文社會科學館舉辦，聚焦於 Python 的最新技術和最佳實踐' +
                '，讓開源社群帶來高品質的演講和工作坊，無論您是 Python 的新手還是資深開發人員，' +
                '都能在這裡找到有價值的學習和交流機會。',
        },
        venueInfo: {
            name: '中央研究院\n人文社會科學館',
            address: '台北市南港區研究院路 2 段 128 號',
        },
        transMode: {
            car: '自行開車',
            publicTransport: '大眾運輸工具',
        },
        carInstructions: {
            title: '開車',
            footerTitle: '停車',
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
                description:
                    '人社館地下室設有汽車停車場，車輛進入院區持證件向大門警衛換證後可駛入院區，停車費用每小時20元。',
            },
            motor: {
                title: '機車',
                description:
                    '機車禁止進入中研院院區。於其{0}及{1}、{2}旁均設有機車停車場，供員工和來賓停放不予收費（不負保管責任）。',
                descriptionLinkTitle1: '大門右側',
                descriptionLinkTitle2: '對面空地',
                descriptionLinkTitle3: '胡適公園',
            },
            moreInfo: '※停車相關資訊詳細說明請見{0}',
            moreInfoLinkTitle: '中研院公告',
        },
        publicTransport: {
            title: '桃園國際機場交通資訊',
            taxi: {
                title: '計程車',
                description:
                    '可以搭計程車代替公車，約 NT$ 100 元。 根據過去的經驗，屆時將會有不少人採取此方式，不妨採取計程車共乘由捷運站前往。',
            },
            uBike: {
                link: {
                    description1: 'YouBike 官方網站',
                    description2: 'OpenCycleMap',
                },
                description1:
                    '中研院週邊亦有不少 YouBike 的租借站。更多 YouBike 附近路線的資訊，可以見 {0} 以及 {1}，建議還車前留意APP上站點可停駐數量。{2}由南港車站或南港展覽館站出發騎乘時間約 10-15 分鐘。',
            },
        },
        publicTransportInfo: {
            title: '乘車方式',
            info: '可乘坐 國光客運 1843 於南港展覽館與桃園機場第一航廈與第二航廈之間往返。',
            '1843infoTitle': '國光客運 1843 路線資訊：',
            description1:
                '路線：南港轉運站西站(高鐵台鐵) →' +
                '捷運南港展覽館站 → 內湖行政中心 → 瑞光路 → ' +
                '捷運港墘站 → 桃園機場第一航廈 → ' +
                '桃園機場第二航廈',
            description2:
                '站台位置： 第一航廈：B1 層巴士乘車區。第二航廈：1F 層巴士乘車區。',
            description3: '票價：全票 NT$140，半票 NT$75',
            description4: '時間：07:10、11:10、15:10',
            description5: '路程時間：約一小時二十分鐘',
        },
    },
})
