export interface StaffMember {
  name: string
  avatar?: string
  leader?: boolean
}

export interface StaffGroup {
  id: string
  name_en: string
  name_zh: string
  members: StaffMember[]
}

export const staffGroups: StaffGroup[] = [
  {
    id: 'chairperson',
    name_en: 'Chairperson',
    name_zh: '主席',
    members: [
      { name: 'Rex', avatar: '/images/about/staff/member-21.jpg', leader: true },
    ],
  },
  {
    id: 'everywhere',
    name_en: 'Everywhere',
    name_zh: '到處都看得到他們',
    members: [
      { name: 'TP' },
      { name: 'Wei' },
      { name: 'Ray', avatar: '/images/about/staff/member-11.jpg' },
    ],
  },
  {
    id: 'program',
    name_en: 'Program',
    name_zh: '議程組',
    members: [
      { name: 'Justin', avatar: '/images/about/staff/member-1.jpg', leader: true },
      { name: 'Peter', avatar: '/images/about/staff/member-2.jpg' },
      { name: '坤賢', avatar: '/images/about/staff/member-3.jpeg' },
      { name: 'Kevin Li', avatar: '/images/about/staff/member-4.jpeg' },
      { name: 'Benson' },
      { name: 'Raymond', avatar: '/images/about/staff/member-5.jpg' },
      { name: 'White19' },
      { name: 'LY', avatar: '/images/about/staff/member-6.jpeg' },
      { name: '歪歐', avatar: '/images/about/staff/member-7.jpg' },
      { name: 'Duke' },
      { name: 'Tina', avatar: '/images/about/staff/member-8.jpg' },
      { name: 'Kir' },
      { name: 'Tumi' },
    ],
  },
  {
    id: 'development',
    name_en: 'Development',
    name_zh: '開發組',
    members: [
      { name: 'SerKo', avatar: '/images/about/staff/member-20.png', leader: true },
      { name: 'Kenji' },
    ],
  },
  {
    id: 'venue',
    name_en: 'Venue',
    name_zh: '場務組',
    members: [
      { name: 'Ray', avatar: '/images/about/staff/member-11.jpg', leader: true },
      { name: 'Elfreda', avatar: '/images/about/staff/member-12.png' },
      { name: 'Fanfan', avatar: '/images/about/staff/member-13.jpg' },
      { name: 'Fox' },
      { name: '235' },
      { name: 'Peter' },
      { name: 'Tiffany' },
      { name: 'Fen' },
    ],
  },
  {
    id: 'sponsorship',
    name_en: 'Marketing - Sponsorship',
    name_zh: '贊助執行組',
    members: [
      { name: 'ROCK', avatar: '/images/about/staff/member-14.jpg', leader: true },
    ],
  },
  {
    id: 'marketing',
    name_en: 'Marketing - Public Relations & Planning',
    name_zh: '公關＆行銷組',
    members: [
      { name: 'Winnie', avatar: '/images/about/staff/member-15.jpeg', leader: true },
      { name: 'Peter', avatar: '/images/about/staff/member-2.jpg' },
      { name: 'Kaya(佳萱)', avatar: '/images/about/staff/member-16.jpeg' },
      { name: 'Connie', avatar: '/images/about/staff/member-10.jpg' },
      { name: 'Tina', avatar: '/images/about/staff/member-8.jpg' },
      { name: 'Fanfan', avatar: '/images/about/staff/member-13.jpg' },
      { name: '9ukei', avatar: '/images/about/staff/member-17.jpg' },
      { name: '家誠', avatar: '/images/about/staff/member-18.png' },
    ],
  },
  {
    id: 'registration',
    name_en: 'Registration',
    name_zh: '註冊組',
    members: [
      { name: 'GTB', leader: true },
      { name: 'Petertc', avatar: '/images/about/staff/member-9.jpg' },
      { name: 'Connie', avatar: '/images/about/staff/member-10.jpg' },
      { name: 'Rudolf' },
      { name: 'SerKo', avatar: '/images/about/staff/member-20.png' },
      { name: 'Yucheng' },
      { name: 'Yu' },
      { name: 'Jonny' },
      { name: 'Iris' },
      { name: 'Zanna' },
      { name: 'Vicky' },
    ],
  },
  {
    id: 'recruitment',
    name_en: 'Recruitment',
    name_zh: '招募組',
    members: [
      { name: 'Yucheng', leader: true },
      { name: 'Leila' },
      { name: 'Petertc', avatar: '/images/about/staff/member-9.jpg' },
      { name: 'Connie', avatar: '/images/about/staff/member-10.jpg' },
    ],
  },
  {
    id: 'design',
    name_en: 'Design',
    name_zh: '設計組',
    members: [
      { name: 'SerKo', avatar: '/images/about/staff/member-20.png', leader: true },
      { name: 'Kaya(佳萱)', avatar: '/images/about/staff/member-16.jpeg' },
    ],
  },
  {
    id: 'finance',
    name_en: 'Finance',
    name_zh: '財務組',
    members: [
      { name: 'ROCK', avatar: '/images/about/staff/member-14.jpg', leader: true },
    ],
  },
  {
    id: 'photography',
    name_en: 'Photography',
    name_zh: '紀錄組',
    members: [
      { name: 'Andy', leader: true },
      { name: '夏川 桃源', avatar: '/images/about/staff/member-19.png' },
      { name: 'Kason Kang' },
      { name: '流雲' },
      { name: '阿特' },
      { name: 'OnCloud' },
      { name: 'white19' },
    ],
  },
]
