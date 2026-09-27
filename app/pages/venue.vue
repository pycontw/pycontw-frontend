<script setup lang="ts">
const { locale, t } = useI18n({ useScope: 'local' })
const { pycon: { year } } = useAppConfig()

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=臺北醫學大學教學大樓'
const mapEmbedUrl = computed(() => `https://maps.google.com/maps?q=臺北醫學大學教學大樓&output=embed&hl=${locale.value === 'zh-hant' ? 'zh-TW' : 'en'}&z=16`)
const trafficUrl = 'https://www.tmuh.org.tw/guide/traffic'
const busRoutes = computed(() => ['1', '22', '33', '37', '38', '226', '288', t('bus.chengde'), t('bus.blue5')])
const sections = computed(() => [
  { id: 'public-transport', label: t('publicTransport'), icon: 'i-lucide-train-front' },
  { id: 'shuttle', label: t('shuttle.navigation'), icon: 'i-lucide-bus-front' },
  { id: 'parking', label: t('parking.title'), icon: 'i-lucide-car-front' },
])
const walkingSteps = computed(() => [
  { title: t('walk.station'), detail: t('walk.line') },
  { title: t('walk.exit'), detail: t('walk.directions') },
  { title: t('venue.university'), detail: t('walk.arrival') },
])

useHead(() => ({ title: t('title') }))
useSeoMeta({
  description: () => t('description', { year }),
})
</script>

<template>
  <UContainer class="venue-page pb-20 sm:pb-28" :lang="locale">
    <ContentHeader :title="t('title')" />

    <section aria-labelledby="venue-name" class="mt-8 overflow-hidden rounded-xl border border-default bg-neutral-950/70">
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col items-start p-6 sm:p-8 lg:p-10">
          <p class="mb-2 text-sm font-medium text-primary">
            PyCon Taiwan {{ year }}
          </p>
          <h2 id="venue-name" class="text-2xl font-bold leading-snug text-highlighted sm:text-3xl">
            {{ t('venue.university') }}
            <span class="mt-1 block">{{ t('venue.building') }}</span>
          </h2>
          <p class="mt-5 flex items-start gap-2 text-base leading-7 text-muted">
            <UIcon name="i-lucide-map-pin" class="mt-1 size-5 shrink-0" />
            <span>{{ t('venue.address') }}</span>
          </p>
          <UButton
            :to="mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            color="neutral"
            trailing-icon="i-lucide-arrow-up-right"
            class="mt-7"
          >
            {{ t('venue.openMaps') }}
          </UButton>
        </div>
        <iframe
          :title="t('venue.mapTitle')"
          :src="mapEmbedUrl"
          class="h-72 w-full border-0 md:h-full md:min-h-78"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
      <div class="flex items-start gap-3 border-t border-default px-6 py-4 text-sm leading-6 text-muted sm:px-8 lg:px-10">
        <UIcon name="i-lucide-info" class="mt-0.5 size-5 shrink-0 text-primary" />
        <p>{{ t('venue.transportNotice') }}</p>
      </div>
    </section>

    <nav :aria-label="t('navigationLabel')" class="mt-8 flex flex-wrap gap-2 border-b border-default pb-8 sm:gap-3">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="venue-jump-link inline-flex items-center gap-2 rounded-lg border border-default bg-neutral-950 px-3 py-2.5 text-sm text-muted transition-colors hover:border-neutral-600 hover:text-highlighted sm:px-4 sm:text-base"
      >
        <UIcon :name="section.icon" class="size-4 shrink-0" />
        {{ section.label }}
        <UIcon name="i-lucide-arrow-down" class="size-3.5 text-dimmed" />
      </a>
    </nav>

    <section id="public-transport" aria-labelledby="public-transport-heading" class="venue-section pt-12 sm:pt-16">
      <div class="mb-6 flex items-center gap-3">
        <h2 id="public-transport-heading" class="text-2xl font-bold text-highlighted sm:text-3xl">
          {{ t('publicTransport') }}
        </h2>
      </div>

      <article class="overflow-hidden rounded-xl border border-primary/30 bg-linear-to-br from-sky-950/35 to-neutral-950">
        <div class="p-6 sm:p-8">
          <div class="mb-7 flex flex-wrap items-center gap-3">
            <UIcon name="i-lucide-train-front" class="size-6 text-primary" />
            <h3 class="text-xl font-semibold text-highlighted">
              {{ t('walk.title') }}
            </h3>
            <UBadge color="primary" variant="soft" size="md">
              {{ t('walk.recommended') }}
            </UBadge>
          </div>

          <ol class="grid gap-6 sm:grid-cols-3 sm:gap-8">
            <li v-for="(step, index) in walkingSteps" :key="step.title" class="relative flex gap-3 sm:block">
              <div class="mb-3 flex items-center gap-3">
                <span class="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-sky-950 font-mono text-sm text-sky-300">{{ index + 1 }}</span>
                <div v-if="index < walkingSteps.length - 1" class="hidden h-px grow bg-primary/20 sm:block" aria-hidden="true" />
              </div>
              <div>
                <p class="mb-1 text-lg font-medium text-highlighted">
                  {{ step.title }}
                </p>
                <p class="text-base leading-7 text-muted">
                  {{ step.detail }}
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div class="flex items-start gap-3 border-t border-primary/15 bg-sky-950/20 px-6 py-4 text-base leading-7 sm:px-8">
          <UIcon name="i-lucide-lightbulb" class="mt-1 size-5 shrink-0 text-sky-400" />
          <i18n-t keypath="walk.fromTaipeiMain" tag="p" scope="parent" class="text-muted">
            <template #origin>
              <strong class="font-medium text-highlighted">{{ t('walk.origin') }}</strong>
            </template>
          </i18n-t>
        </div>
      </article>

      <div class="mt-5 grid gap-5 md:grid-cols-2">
        <article class="rounded-xl border border-default bg-neutral-950/60 p-6 sm:p-8">
          <div class="mb-5 flex items-center gap-3">
            <UIcon name="i-lucide-route" class="size-6 text-muted" />
            <h3 class="text-xl font-semibold text-highlighted">
              {{ t('metroBus.title') }}
            </h3>
          </div>
          <i18n-t keypath="metroBus.directions" tag="p" scope="parent" class="text-base leading-7 text-muted">
            <template #station>
              <strong class="font-medium text-highlighted">{{ t('metroBus.station') }}</strong>
            </template>
          </i18n-t>
          <ul class="mt-5 divide-y divide-default">
            <li class="flex flex-wrap items-center gap-x-3 gap-y-1 pb-4">
              <span class="rounded-md bg-blue-950 px-2.5 py-1 text-sm font-medium text-blue-300">{{ t('bus.blue5') }}</span>
              <span class="text-base">{{ t('metroBus.universityStop') }}</span>
            </li>
            <li class="flex flex-wrap items-center gap-x-3 gap-y-1 pt-4">
              <span class="rounded-md bg-neutral-800 px-2.5 py-1 text-sm font-medium text-neutral-200">{{ t('bus.minibus7') }}</span>
              <span class="text-base">{{ t('metroBus.hospitalStop') }}</span>
            </li>
          </ul>
          <p class="mt-5 text-sm leading-6 text-muted">
            {{ t('metroBus.arrival') }}
          </p>
        </article>

        <article class="rounded-xl border border-default bg-neutral-950/60 p-6 sm:p-8">
          <div class="mb-5 flex items-center gap-3">
            <UIcon name="i-lucide-bus-front" class="size-6 text-muted" />
            <h3 class="text-xl font-semibold text-highlighted">
              {{ t('bus.title') }}
            </h3>
          </div>
          <i18n-t keypath="bus.directions" tag="p" scope="parent" class="text-base leading-7 text-muted">
            <template #stop>
              <strong class="font-medium text-highlighted">{{ t('bus.stop') }}</strong>
            </template>
          </i18n-t>
          <ul :aria-label="t('bus.routesLabel')" class="mt-4 flex flex-wrap gap-2">
            <li v-for="bus in busRoutes" :key="bus" class="rounded-md border border-default bg-neutral-900 px-3 py-1 text-sm text-neutral-200">
              {{ bus }}
            </li>
          </ul>
          <p class="mt-5 text-sm leading-6 text-muted">
            {{ t('bus.minibusNotice') }}
          </p>
        </article>
      </div>

      <article class="mt-5 flex items-start gap-4 rounded-xl border border-default bg-neutral-950/60 p-6 sm:px-8">
        <UIcon name="i-lucide-bike" class="mt-1 size-6 shrink-0 text-muted" />
        <div>
          <h3 class="mb-2 text-xl font-semibold text-highlighted">
            YouBike
          </h3>
          <i18n-t keypath="bike.location" tag="p" scope="parent" class="text-base leading-7 text-muted">
            <template #address>
              <strong class="font-medium text-highlighted">{{ t('bike.address') }}</strong>
            </template>
          </i18n-t>
          <p class="mt-1 text-sm leading-6 text-muted">
            {{ t('bike.availability') }}
          </p>
        </div>
      </article>
    </section>

    <section id="shuttle" aria-labelledby="shuttle-heading" class="venue-section pt-12 sm:pt-16">
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <h2 id="shuttle-heading" class="text-2xl font-bold text-highlighted sm:text-3xl">
          {{ t('shuttle.title') }}
        </h2>
      </div>
      <div class="overflow-hidden rounded-xl border border-default bg-neutral-950/60">
        <div class="p-6 sm:p-8">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-bus-front" class="mt-1 size-6 shrink-0 text-muted" />
            <div>
              <h3 class="text-lg font-semibold text-highlighted">
                {{ t('shuttle.route') }}
              </h3>
              <i18n-t keypath="shuttle.pickup" tag="p" scope="parent" class="mt-2 text-base leading-7 text-muted">
                <template #location>
                  <strong class="font-medium text-highlighted">{{ t('shuttle.location') }}</strong>
                </template>
              </i18n-t>
            </div>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-lg border border-default bg-neutral-900/60 p-5 sm:p-6">
              <p class="text-base font-medium text-highlighted">
                {{ t('shuttle.saturdayDate') }}<span class="ml-2 text-muted">{{ t('shuttle.saturday') }}</span>
              </p>
              <p class="mt-4 font-mono text-3xl font-semibold tracking-tight text-highlighted">
                07:00 – 16:00
              </p>
              <p class="mt-2 text-sm text-muted">
                {{ t('shuttle.frequency') }}
              </p>
            </div>
            <div class="rounded-lg border border-amber-400/20 bg-amber-950/15 p-5 sm:p-6">
              <p class="text-base font-medium text-highlighted">
                {{ t('shuttle.sundayDate') }}<span class="ml-2 text-muted">{{ t('shuttle.sunday') }}</span>
              </p>
              <p class="mt-4 flex items-center gap-2 text-3xl font-semibold text-amber-300">
                <UIcon name="i-lucide-circle-alert" class="size-6 shrink-0" />
                {{ t('shuttle.noService') }}
              </p>
              <p class="mt-2 text-sm text-muted">
                {{ t('shuttle.alternatives') }}
              </p>
            </div>
          </div>
        </div>
        <div class="border-t border-default px-6 py-4 text-sm leading-6 text-muted sm:px-8">
          <i18n-t keypath="shuttle.notice" tag="p" scope="parent">
            <template #announcement>
              <a :href="trafficUrl" target="_blank" rel="noopener noreferrer" class="venue-text-link">{{ t('shuttle.announcement') }}<UIcon name="i-lucide-arrow-up-right" class="ml-0.5 inline-block size-3.5 align-middle" /></a>
            </template>
          </i18n-t>
        </div>
      </div>
    </section>

    <section id="parking" aria-labelledby="parking-heading" class="venue-section pt-12 sm:pt-16">
      <div class="mb-6 flex items-center gap-3">
        <h2 id="parking-heading" class="text-2xl font-bold text-highlighted sm:text-3xl">
          {{ t('parking.title') }}
        </h2>
      </div>
      <div class="grid gap-8 rounded-xl border border-default bg-neutral-950/60 p-6 sm:p-8 md:grid-cols-2 md:gap-12">
        <div>
          <h3 class="mb-3 flex items-center gap-3 text-xl font-semibold text-highlighted">
            <UIcon name="i-lucide-car-front" class="size-6 text-muted" />
            {{ t('parking.driving') }}
          </h3>
          <i18n-t keypath="parking.directions" tag="p" scope="parent" class="text-base leading-7 text-muted">
            <template #destination>
              <strong class="font-medium text-highlighted">{{ t('parking.destination') }}</strong>
            </template>
          </i18n-t>
          <h3 class="mb-3 mt-7 text-lg font-semibold text-highlighted">
            {{ t('parking.nearby') }}
          </h3>
          <i18n-t keypath="parking.locations" tag="p" scope="parent" class="text-base leading-7 text-muted">
            <template #medicalBuilding>
              <strong class="font-medium text-highlighted">{{ t('parking.medicalBuilding') }}</strong>
            </template>
            <template #cancerBuilding>
              <strong class="font-medium text-highlighted">{{ t('parking.cancerBuilding') }}</strong>
            </template>
          </i18n-t>
          <p class="mt-3 text-sm leading-6 text-muted">
            {{ t('parking.availability') }}
          </p>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-semibold text-highlighted">
            {{ t('parking.rates') }}
          </h3>
          <dl class="divide-y divide-default">
            <div class="flex items-center justify-between gap-4 pb-4">
              <dt class="text-base text-muted">
                {{ t('parking.cars') }}
              </dt>
              <dd class="text-highlighted">
                <span class="text-xl font-semibold">NT$50</span><span class="ml-1 text-sm text-muted">{{ t('parking.perHour') }}</span>
              </dd>
            </div>
            <div class="flex items-start justify-between gap-4 py-4">
              <dt class="text-base leading-7 text-muted">
                {{ t('parking.motorcycles') }}
              </dt>
              <dd class="text-right text-highlighted">
                <span class="text-xl font-semibold">NT$30</span><span class="ml-1 text-sm text-muted">{{ t('parking.perEntry') }}</span>
                <span class="mt-1 block text-sm text-muted">{{ t('parking.overnight') }}</span>
              </dd>
            </div>
            <div class="flex items-center justify-between gap-4 pt-4">
              <dt class="text-base text-muted">
                {{ t('parking.firstMinutes') }}
              </dt>
              <dd class="font-medium">
                {{ t('parking.free') }}
              </dd>
            </div>
          </dl>
          <i18n-t keypath="parking.notice" tag="p" scope="parent" class="mt-5 text-sm leading-6 text-muted">
            <template #announcement>
              <a :href="trafficUrl" target="_blank" rel="noopener noreferrer" class="venue-text-link">{{ t('parking.announcement') }}<UIcon name="i-lucide-arrow-up-right" class="ml-0.5 inline-block size-3.5 align-middle" /></a>
            </template>
          </i18n-t>
        </div>
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
.venue-section {
  scroll-margin-top: calc(var(--ui-header-height) + 1.5rem);
}

.venue-text-link {
  color: var(--color-sky-300);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.venue-text-link:hover {
  color: var(--color-sky-200);
}

.venue-jump-link:focus-visible,
.venue-text-link:focus-visible {
  outline: 2px solid var(--ui-primary);
  outline-offset: 4px;
}
</style>

<i18n lang="yaml">
en-us:
  title: Venue
  description: "PyCon Taiwan {year} takes place at the Teaching Building of Taipei Medical University. Find the venue address, MRT and bus routes, free shuttle service, and parking information."
  navigationLabel: Venue information sections
  publicTransport: Public transportation
  venue:
    university: Taipei Medical University
    building: Teaching Building
    address: No. 250, Wuxing St., Xinyi Dist., Taipei City 110
    openMaps: Open Google Maps
    mapTitle: Map of the Taipei Medical University Teaching Building
    transportNotice: Parking around the campus and hospital is limited, and traffic may be heavy on weekends. We recommend taking public transportation.
  walk:
    title: MRT + walking
    recommended: Recommended route
    station: Taipei 101/World Trade Center
    line: Tamsui-Xinyi Line (Red Line), R03
    exit: Take Exit 2
    directions: Walk along Zhuangjing Rd. toward Wuxing St. for about 15 minutes.
    arrival: Head to the Teaching Building when you arrive.
    origin: "From Taipei Main Station:"
    fromTaipeiMain: "{origin} Take the Tamsui-Xinyi Line toward Xiangshan. Get off at Taipei 101/World Trade Center Station, then follow the walking route above."
  metroBus:
    title: MRT + bus
    directions: "Take the Bannan Line (Blue Line) to {station}, then transfer to one of these buses near Exit 2:"
    station: Taipei City Hall Station (BL18)
    universityStop: Get off at Taipei Medical University.
    hospitalStop: Get off at Taipei Medical University Hospital.
    arrival: Walk into TMU's Xinyi campus and follow the signs to the Teaching Building.
  bus:
    title: Bus
    directions: "Take one of these routes and get off at the {stop} stop:"
    stop: Taipei Medical University
    routesLabel: Bus routes serving Taipei Medical University
    chengde: Chengde Main Line (formerly 266)
    blue5: Blue 5
    minibus7: Citizen Minibus 7
    minibusNotice: If taking Citizen Minibus 7, get off at Taipei Medical University Hospital.
  bike:
    location: "The YouBike 2.0 Taipei Medical University station is located at {address}."
    address: Alley 59, Lane 220, Wuxing Street
    availability: Check YouBike's real-time information for available bikes and docks.
  shuttle:
    navigation: Free shuttle
    title: TMU Hospital free shuttle
    route: MRT Taipei City Hall Station — TMU Hospital
    pickup: "The shuttle is operated by Taipei Medical University Hospital. Board at the {location}."
    location: bus shelter to the right of Exit 2 at Taipei City Hall Station
    saturdayDate: October 17
    saturday: Saturday
    sundayDate: October 18
    sunday: Sunday
    frequency: Generally every 10 minutes
    noService: No service
    alternatives: Please take the MRT, a bus, or another form of transportation.
    notice: "Service may change due to traffic or hospital arrangements. Please check {announcement} for the latest information."
    announcement: TMU Hospital's latest announcements
  parking:
    title: Driving & parking
    driving: Driving
    directions: "Set your destination to {destination}."
    destination: Taipei Medical University Teaching Building
    nearby: Nearby parking
    locations: "Underground parking is available at TMU Hospital's {medicalBuilding} and {cancerBuilding}."
    medicalBuilding: Third Medical Building
    cancerBuilding: Cancer Building
    availability: Spaces are limited. We recommend taking public transportation.
    rates: Parking rates
    cars: Cars
    perHour: / hour
    motorcycles: Motorcycles
    perEntry: / entry
    overnight: Charged again the next day
    firstMinutes: First 15 minutes
    free: Free
    notice: "For opening hours, available spaces, and current rates, please refer to on-site information and {announcement}."
    announcement: TMU Hospital's announcements
zh-hant:
  title: 會場資訊
  description: "PyCon Taiwan {year} 於臺北醫學大學教學大樓舉行。查看會場地址、捷運與公車路線、免費接駁車及停車資訊。"
  navigationLabel: 會場資訊章節
  publicTransport: 大眾運輸
  venue:
    university: 臺北醫學大學
    building: 教學大樓
    address: 110 臺北市信義區吳興街 250 號
    openMaps: 開啟 Google Maps
    mapTitle: 臺北醫學大學教學大樓位置地圖
    transportNotice: 校園及醫院周邊停車位有限，假日可能較為壅塞，建議優先搭乘大眾運輸。
  walk:
    title: 捷運＋步行
    recommended: 推薦路線
    station: 台北 101／世貿站
    line: 淡水信義線（紅線）R03
    exit: 2 號出口出站
    directions: 沿莊敬路前往吳興街，步行約 15 分鐘
    arrival: 抵達後前往教學大樓
    origin: 從臺北車站出發：
    fromTaipeiMain: "{origin}搭乘淡水信義線往「象山」方向，於「台北 101／世貿站」下車，再依上述路線前往會場。"
  metroBus:
    title: 捷運＋公車
    directions: "搭乘板南線（藍線）至{station}，由 2 號出口附近轉乘："
    station: 市政府站（BL18）
    universityStop: 臺北醫學大學站下車
    hospitalStop: 臺北醫學大學附設醫院站下車
    arrival: 下車後步行進入北醫信義校區，依現場指標前往教學大樓。
  bus:
    title: 公車
    directions: "搭乘以下路線，於{stop}下車："
    stop: 臺北醫學大學站
    routesLabel: 行經臺北醫學大學站的公車路線
    chengde: 承德幹線（原 266）
    blue5: 藍 5
    minibus7: 市民小巴 7
    minibusNotice: 搭乘市民小巴 7，請於「臺北醫學大學附設醫院站」下車。
  bike:
    location: "YouBike 2.0「臺北醫學大學站」位於{address}。"
    address: 吳興街 220 巷 59 弄
    availability: 車輛與車位數量請以 YouBike 即時資訊為準。
  shuttle:
    navigation: 免費接駁車
    title: 北醫附醫免費接駁車
    route: 捷運市政府站 — 北醫附醫
    pickup: "由臺北醫學大學附設醫院提供，乘車處位於{location}。"
    location: 市政府站 2 號出口右側公車亭
    saturdayDate: 10 月 17 日
    saturday: 星期六
    sundayDate: 10 月 18 日
    sunday: 星期日
    frequency: 原則上每 10 分鐘一班
    noService: 停駛
    alternatives: 請改搭捷運、公車或其他交通工具
    notice: "班次可能受交通及院方安排影響，請以{announcement}為準。"
    announcement: 北醫附醫最新公告
  parking:
    title: 開車與停車
    driving: 自行開車
    directions: "導航至{destination}。"
    destination: 「臺北醫學大學 教學大樓」
    nearby: 鄰近停車場
    locations: "可利用北醫附醫{medicalBuilding}及{cancerBuilding}地下停車場。"
    medicalBuilding: 第三醫療大樓
    cancerBuilding: 癌症大樓
    availability: 車位有限，建議優先搭乘大眾運輸。
    rates: 停車費用
    cars: 汽車
    perHour: ／小時
    motorcycles: 機車
    perEntry: ／次
    overnight: 隔日另計
    firstMinutes: 入場前 15 分鐘
    free: 免費
    notice: "實際開放情形、剩餘車位與收費標準，請以停車場現場及{announcement}為準。"
    announcement: 北醫附醫公告
</i18n>
