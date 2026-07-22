export interface PythonTaiwanCommunity {
  id: string
  name_zh: string
  name_en: string
  description_zh: string
  description_en: string
  url?: string
}

export const communities: PythonTaiwanCommunity[] = [
  {
    id: 'taipei',
    name_zh: '台北 - Taipei.py',
    name_en: 'Taipei - Taipei.py',
    description_zh: '2012 年 Keith、Tim 與其快樂夥伴們創立了 Taipei.py。每個月固定在 CLBC 聚會，聚會分享主題以網路相關技術為主，近期也越來越多大數據相關的分享。由於創辦者們多數在網路相關行業，因此除了每月例會，也會舉辦讀書會等活動。',
    description_en: 'Keith, Tim, and some enthusiasts launched Taipei.py in 2012 and started hosting monthly events at CLBC. The topics are mainly focused on web technology and data science. Besides the monthly meetups, Andy also hosted Python Web Meetup and Django study group for web geeks!',
    url: 'http://www.meetup.com/Taipei-py/',
  },
  {
    id: 'pyhug',
    name_zh: '新竹 - PyHUG',
    name_en: 'Hsinchu - PyHUG',
    description_zh: '台灣第一個 Python 社群，2011 年由 yyc 和 Albert Huang 成立。每月定期邀請講者分享。參加成員以大學生為主，聚會偏重Python 在科學上的應用。近幾年每週三在咖啡館聚會，漸漸變成「吃吃喝喝聊 Python 及雜七雜八」的形式。目前由 Dainese 擔任負責人，需要地方的新血加入。',
    description_en: 'Taiwan’s first Python community was established in 2011 by yyc and Albert Huang. Speakers are invited to share every month. The participating are mainly students. In recent years, gatherings in cafes every Wednesday has become a form of "eating, drinking, talking about Python and sorts of things". New blood is needed to join.',
    url: 'http://www.meetup.com/pythonhug/',
  },
  {
    id: 'taichung',
    name_zh: '台中 - Taichung.py',
    name_en: 'Taichung - Taichung.py',
    description_zh: '唐元亮老師於 2014 年發起了 Taichung.py 。初期流浪在各餐廳與咖啡館，後期由微程式科技提供場地空間，告別流浪的生活。每月聚會一次，時間在星期六下午，剛好可以在聚會結束後，到附近的逢甲夜市散步、覓食。',
    description_en: 'Taichung.py was started in 2014 by Prof. Yuan-Liang Tang and several enthusiasts. The events were held at restaurants or coffee shops until later Microprogram Co. supported the event venue. Now the events are held monthly in Saturday afternoon, which is best suited for a walk to have some snacks in Fengjia Night Market after the event.',
    url: 'https://www.facebook.com/groups/780250978715991/',
  },
  {
    id: 'nantou',
    name_zh: '南投 - Nantou.py',
    name_en: 'Nantou - Nantou.py',
    description_zh: '2019 年底，南開科技大學副校長林正敏教授，創立了 Nantou.py。2024 年由南投竹山長大的黃俊毓接棒。黃召集人也是一名開放原始碼專案貢獻者，經常透過社群或研討會分享 side projects。在南投人稱科技沙漠的地區，有著這一群人為 python 貢獻己力，並為有意學習的大家，帶來一場無私、無限的學習地。',
    description_en: 'Founded by Prof. Cheng-Min Lin, Vice President of Nan Kai University of Technology, towards the end of 2019, Nantou.py was later handed over to Huang Jun-Yu in 2024, a native of Zhushan, Nantou. Jyun-Yu, also an active contributor to open-source projects, frequently shares his side projects through community events and workshops.In a region often referred to as a "technology desert," this group of dedicated Python enthusiasts provides a selfless and limitless learning environment for those interested in Python.',
    url: 'https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/',
  },
  {
    id: 'tainan',
    name_zh: '台南 - Tainan.py',
    name_en: 'Tainan - Tainan.py',
    description_zh: '2013 年 Joe 在台南成立了 Tainan.py經過 2021 年疫情的停辦，2022 年 Jesse 加入，重啟 Tainan.py，並有了 FB 粉絲專頁。目前半年一次聚會，偶有不定期聚會，誠招新成員加入，來 Tainan.py 邊交流邊品嘗台南美食吧！',
    description_en: 'In 2013, Joe founded Tainan.py in Tainan. After a pause due to the 2021 pandemic, Jesse joined in 2022, revitalizing Tainan.py and establishing a Facebook fan page. Meetings now occur twice a year, with occasional gatherings. We\'re actively inviting new members to join and enjoy Tainan\'s cuisine while networking.',
    url: 'http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/',
  },
  {
    id: 'kaohsiung',
    name_zh: '高雄 - Kaohsiung.py',
    name_en: 'Kaohsiung - Kaohsiung.py',
    description_zh: 'Victor Gau 在成立 Kaohsiung.py 之前，定期會去參加 Joe 安排的 Tainan.py 活動，直到有一次回程時，與超速的機車擦撞，讓 Victor 萌生在高雄成立社群的念頭。2014 年，Victor 在高雄發起了 Kaohsiung.py ，除了不定期的在禮拜六安排專家來分享，每個月會挑一個星期一，在文藻外語大學聚會。',
    description_en: 'Before establishing Kaohsiung.py, Victor Gau participate in the Tainan.py event until he collided with a locomotive, giving Victor the idea of establishing a community in Kaohsiung. In 2014, Victor launched Kaohsiung.py. Arranging experts to share on Saturdays from time to time, he would pick one Monday every month to meet at Wenzao.',
    url: 'http://www.meetup.com/Kaohsiung-Python-Meetup/',
  },
  {
    id: 'hualien',
    name_zh: '花蓮 - Hualien.py',
    name_en: 'Hualien - Hualien.py',
    description_zh: '2013年，魏澤人老師有感於東部較缺乏開源及技術社群，開始邀約各地的 Python 講者。在 Mosky 等人爽快答應下，花蓮.py 在 2014 年順利展開。現在花蓮本地的講者也越來越多了。目前聚會的形式，除了演講分享外，也常有自由聚會及特定主題的workshop。',
    description_en: 'In 2013, Wei Zeren felt that there was a lack of open source in the east, and began to invite Python speakers from all over the world. With the willingness of Mosky, Hualien.py started smoothly in 2014. In the current form of gatherings, apart from speech sharing, there are also free gatherings and workshops on specific topics.',
    url: 'http://www.meetup.com/Hualien-Py/',
  },
  {
    id: 'pyladiestw',
    name_zh: 'PyLadies Taiwan',
    name_en: 'PyLadies Taiwan',
    description_zh: 'PyLadies 是一個專屬於女生的 Python 愛好者聚會，想瞭解 Python 的女生彼此交流、聊天認識朋友的地方。透過 Workshop 的方式讓女生成為主動的參與者。每個月舉辦不同主題的活動，例：初學者的入門、Python 的應用與經驗分享。只要對 Python 有興趣，歡迎妳來參加喔！',
    description_en: 'PyLadies is a group of women developers who love Python. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python community. We host monthly meetups with different topics, such as beginners meetups, project presentation, and tutorial. Open to all who identify as women. Feel free to join us!',
    url: 'https://tw.pyladies.com/',
  },
  {
    id: 'djangogirlstaipei',
    name_zh: 'Django Girls Taipei',
    name_en: 'Django Girls Taipei',
    description_zh: '2014 年，是 Michelle 成立 Django Girls Taipei 的一年。藉由不定期舉辦教學活動，帶領女孩們一步步製作自己的網站。也和 Python Web Meetup 一起合辦新手村活動，給對 Django 有一點點了解，又想要瞭解更多的女孩們參加。',
    description_en: 'Django Girls Taipei was founded by Michelle Leu in 2014. We held casual tutorials, workshops, meetups to help girls build their own Django website. Highly recommend to girls with basic understanding of Django to join us!.',
    url: 'https://djangogirls.org/taipei/',
  },
]
