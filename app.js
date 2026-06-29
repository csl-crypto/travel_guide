const CHECK_KEY = "phuquocTravelGuide.checks.v2";

const days = [
	{
		id: "d0729",
		label: "7/29",
		title: "출국과 도착",
		subtitle: "집 출발, 인천공항, 푸꾸옥 도착, 환전과 픽업 확인",
		events: [
			event("11:00", "집 출발", "공항 이동을 시작합니다. 여권, 유심/eSIM, 환전 준비물을 확인합니다.", ["출발", "준비"]),
			event("13:00", "인천공항 도착 · 면세점", "출국 수속, 수하물, 면세점 이용 시간을 여유 있게 잡습니다.", ["인천공항"], [official("인천공항", "https://www.airport.kr/ap/ko/index.do"), map("인천국제공항")]),
			event("17:20", "비행기 출국", "제주항공 7C2315편 탑승 예정입니다.", ["제주항공 7C2315"], [official("제주항공 운항조회", "https://www.jejuair.net/ko/linkService/flightStatus.do")]),
			event("21:25", "푸꾸옥 도착 · BIDV ATM 환전", "도착 후 2층 출국장 BIDV ATM에서 환전을 확인합니다.", ["환전", "공항"], [map("푸꾸옥 국제공항 BIDV ATM"), search("푸꾸옥 공항 BIDV ATM 환전")]),
			event("22:00", "픽업 또는 Grab 확인", "체크아웃 완료 후 예약된 픽업 또는 Grab 이동 여부를 확인합니다.", ["확인 필요", "이동"], [official("Grab", "https://www.grab.com/vn/en/")], true)
		]
	},
	{
		id: "d0730",
		label: "7/30",
		title: "리조트 휴식",
		subtitle: "조식, 리조트 관광, 수영, 저녁 식사",
		events: [
			event("08:00", "기상 및 조식", "리조트에서 여유 있게 하루를 시작합니다.", ["조식"]),
			event("14:00", "리조트 관광 · 수영 · 휴식", "리조트 시설을 둘러보고 수영과 휴식 위주로 보냅니다.", ["휴식", "수영"]),
			event("17:00", "저녁 식사 후보", "미스터 씨푸드, 냐항센, 리프로도, 소나시 야시장, 망고빙수 후보를 보고 현장에서 선택합니다.", ["저녁", "야시장"], [map("푸꾸옥 Mr Seafood"), map("푸꾸옥 소나시 야시장"), search("푸꾸옥 망고빙수")])
		]
	},
	{
		id: "d0731",
		label: "7/31",
		title: "사파리와 중부 이동",
		subtitle: "체크아웃, 사파리, 중부 시내, 듀월드 이동",
		events: [
			event("08:00", "기상 및 조식", "체크아웃 전 짐 정리와 이동 준비를 마칩니다.", ["조식", "체크아웃 준비"]),
			event("10:00", "체크아웃 · 사파리 이동", "렌트 예약이 필요합니다. 사파리 이동 시간을 고려해 출발합니다.", ["렌트 예약 필요", "사파리"], [map("Vinpearl Safari Phu Quoc"), search("푸꾸옥 빈펄 사파리 예약")], true),
			event("13:00", "기린식당 · 사파리 버스", "기린식당과 사파리 버스 이용을 검토합니다. 필요하면 가족별 개인 관람으로 나눕니다.", ["기린식당", "예약 필요"], [search("Vinpearl Safari Phu Quoc giraffe restaurant"), search("푸꾸옥 사파리 버스")], true),
			event("16:00", "중부 시내 이동 · 점심/간식", "메오키친, 반쎄오, 맥주, 꼬치, 쌀국수, 카페 안바 후보를 보고 동선에 맞춰 선택합니다.", ["중부", "식당 후보"], [map("푸꾸옥 메오키친"), search("푸꾸옥 반쎄오 맛집"), search("푸꾸옥 Anba Coffee")]),
			event("18:00", "듀월드 이동", "저녁 일정 전 숙소 또는 다음 목적지로 이동합니다.", ["이동"]),
			event("21:00", "체크인 및 휴식", "짐 정리 후 다음날 혼똔섬 일정을 준비합니다.", ["휴식"])
		]
	},
	{
		id: "d0801",
		label: "8/1",
		title: "혼똔섬과 선셋타운",
		subtitle: "케이블카, 워터파크, 선셋타운, 키스오브더씨",
		events: [
			event("08:00", "기상 및 조식", "혼똔섬 이동 전 수영복, 수건, 선크림, 방수팩을 준비합니다.", ["조식", "준비"]),
			event("10:00", "혼똔섬 이동 · 케이블카 탑승", "운영 시간은 09:00-11:30, 13:30-17:00 기준으로 확인합니다. 탑승 시간은 약 15-20분입니다.", ["케이블카 예약 필요", "운영시간 확인"], [map("Hon Thom Cable Car Phu Quoc"), search("푸꾸옥 혼똔섬 케이블카 예약")], true),
			event("12:00", "혼똔섬 내부 투어와 놀이", "워터파크, 놀이공원, 해변을 둘러봅니다. 점심은 부페 포함 패키지 또는 현장 식사로 해결합니다.", ["워터파크", "해변"], [search("Sun World Hon Thom Nature Park"), search("푸꾸옥 혼똔섬 워터파크")]),
			event("16:00", "선셋타운 이동", "선셋타운 단독 버기카 무료투어는 예약 또는 현장 예매 여부를 확인합니다.", ["버기카 확인", "선셋타운"], [map("Sunset Town Phu Quoc"), search("푸꾸옥 선셋타운 버기카")], true),
			event("18:00", "키스오브더씨 · 저녁 식사", "키스오브더씨 관람 후 껌자딘, 선셋분식, 베트남 가정식, 코코넛주스, 망고빙수 후보를 확인합니다.", ["공연", "저녁"], [search("Kiss of the Sea Phu Quoc"), search("푸꾸옥 선셋타운 맛집"), search("푸꾸옥 망고빙수")]),
			event("21:00", "숙소 이동 및 휴식", "공연 후 숙소로 이동합니다.", ["휴식"])
		]
	},
	{
		id: "d0802",
		label: "8/2",
		title: "휴식과 귀국",
		subtitle: "물놀이 후 17:45 공항 셔틀, 인천 출국",
		events: [
			event("08:00", "기상 및 조식", "마지막 날 일정과 짐 정리를 확인합니다.", ["조식"]),
			event("15:00", "휴식 및 물놀이", "리조트에서 휴식하고 물놀이를 합니다. 17:45 공항 셔틀 탑승 시간을 기준으로 움직입니다.", ["휴식", "셔틀 17:45"], [], true),
			event("22:00", "인천 출국", "공항 수속과 탑승 시간을 확인합니다.", ["귀국"])
		]
	}
];

const linkGroups = [
	linkGroup("예약 확인", "렌트, 사파리, 혼똔섬 케이블카, 선셋타운 공연은 사전 확인이 필요합니다.", [
		search("푸꾸옥 빈펄 사파리 예약"),
		search("푸꾸옥 혼똔섬 케이블카 예약"),
		search("Kiss of the Sea Phu Quoc ticket")
	]),
	linkGroup("장소 지도", "주요 이동 지점을 지도에서 바로 확인합니다.", [
		map("푸꾸옥 국제공항"),
		map("Vinpearl Safari Phu Quoc"),
		map("Hon Thom Cable Car Phu Quoc"),
		map("Sunset Town Phu Quoc")
	]),
	linkGroup("교통", "공항 픽업, Grab, 셔틀 시간을 한 번 더 맞춥니다.", [
		official("Grab Vietnam", "https://www.grab.com/vn/en/"),
		search("푸꾸옥 공항 픽업"),
		search("푸꾸옥 공항 셔틀")
	]),
	linkGroup("식당 후보", "현장 컨디션에 따라 해산물, 베트남식, 카페를 선택합니다.", [
		search("푸꾸옥 미스터 씨푸드"),
		search("푸꾸옥 소나시 야시장"),
		search("푸꾸옥 선셋타운 맛집")
	]),
	linkGroup("기본 정보", "날씨, 환율, 공항 정보를 출발 전 확인합니다.", [
		search("푸꾸옥 날씨 8월"),
		search("베트남 동 환율"),
		official("인천공항", "https://www.airport.kr/ap/ko/index.do")
	])
];

const checklist = [
	["렌트 예약 확인", "7/31 사파리 이동 일정에 필요"],
	["사파리 예약 확인", "기린식당, 사파리 버스 포함 여부 확인"],
	["혼똔섬 케이블카 예약", "운영 시간과 티켓 패키지 확인"],
	["선셋타운 버기카/공연 확인", "무료투어, 키스오브더씨 예약 또는 현장 구매"],
	["공항 픽업 또는 Grab 확인", "7/29 도착 후 이동 수단"],
	["환전 위치 확인", "푸꾸옥 공항 BIDV ATM"],
	["공항 셔틀 시간 확인", "8/2 17:45 셔틀 탑승 기준"],
	["여권, 유심/eSIM, 상비약", "출발 전 개인 준비물"]
];

let activeDayId = days[0].id;
let selectedEventKey = "";

document.addEventListener("DOMContentLoaded", () => {
	renderDayTabs();
	renderTimeTable();
	renderLinks();
	renderChecklist();
});

function event(time, title, body, tags = [], links = [], alert = false) {
	return { time, title, body, tags, links, alert };
}

function linkGroup(title, body, links) {
	return { title, body, links };
}

function renderDayTabs() {
	const tabs = document.getElementById("dayTabs");
	tabs.replaceChildren(...days.map((day) => {
		const button = document.createElement("button");
		button.type = "button";
		button.className = `day-tab${day.id === activeDayId ? " active" : ""}`;
		button.textContent = day.label;
		button.addEventListener("click", () => {
			activeDayId = day.id;
			selectedEventKey = "";
			renderDayTabs();
			renderTimeTable();
		});
		return button;
	}));
}

function renderTimeTable() {
	const box = document.getElementById("timeTableBox");
	const day = days.find((item) => item.id === activeDayId) || days[0];
	const header = document.createElement("div");
	header.className = "table-day-head";
	const weatherLinks = weatherLink(day);
	header.innerHTML = `<strong>${escapeHtml(day.label)} ${escapeHtml(day.title)}</strong><span>${escapeHtml(day.subtitle)}</span><div class="weather-links">${weatherLinks.map((weather) => `<a class="weather-link" href="${weather.href}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(weather.title)}"><b aria-hidden="true">${escapeHtml(weather.icon)}</b>${escapeHtml(weather.label)}</a>`).join("")}</div>`;
	const rows = collectTimeRows(day);
	box.replaceChildren(header, ...rows.map((row, index) => {
		const element = document.createElement("div");
		element.className = `table-row tone-${index % 5}`;
		const time = document.createElement("div");
		time.className = "table-time";
		time.textContent = row.time;
		const events = document.createElement("div");
		events.className = "table-events";
		row.items.forEach((item, itemIndex) => {
			const eventKey = `${day.id}:${row.time}:${itemIndex}`;
			const selected = selectedEventKey === eventKey;
			const cell = document.createElement("div");
			cell.className = `table-event${selected ? " selected" : ""}`;
			cell.dataset.time = row.time;
			cell.tabIndex = 0;
			cell.role = "button";
			cell.setAttribute("aria-pressed", selected ? "true" : "false");
			cell.innerHTML = `<strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.body)}</span><div class="tag-row"></div><div class="link-row"></div>`;
			const tagRow = cell.querySelector(".tag-row");
			item.tags.forEach((tag) => tagRow.append(tagElement(tag, item.alert)));
			const linkRow = cell.querySelector(".link-row");
			item.links.forEach((itemLink) => linkRow.append(anchor(itemLink)));
			cell.addEventListener("click", (event) => {
				if (event.target.closest("a")) {
					return;
				}
				selectedEventKey = eventKey;
				renderTimeTable();
			});
			cell.addEventListener("keydown", (event) => {
				if (event.key !== "Enter" && event.key !== " ") {
					return;
				}
				event.preventDefault();
				selectedEventKey = eventKey;
				renderTimeTable();
			});
			events.append(cell);
		});
		if (row.items.some((item, itemIndex) => selectedEventKey === `${day.id}:${row.time}:${itemIndex}`)) {
			element.classList.add("table-row--selected");
		}
		element.append(time, events);
		return element;
	}));
}

function collectTimeRows(day) {
	const mapByTime = new Map();
	day.events.forEach((item) => {
		if (!mapByTime.has(item.time)) {
			mapByTime.set(item.time, []);
		}
		mapByTime.get(item.time).push(item);
	});
	return [...mapByTime.entries()]
		.map(([time, items]) => ({ time, items }))
		.sort((a, b) => timeValue(a.time) - timeValue(b.time));
}

function timeValue(value) {
	const [hour = "99", minute = "0"] = value.split(":");
	const parsedHour = Number(hour);
	if (Number.isNaN(parsedHour)) {
		return 9999;
	}
	return parsedHour * 60 + Number(minute || 0);
}

function renderLinks() {
	const grid = document.getElementById("linkGrid");
	grid.replaceChildren(...linkGroups.map((group) => {
		const card = document.createElement("article");
		card.className = "link-card";
		card.innerHTML = `<h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.body)}</p><div class="link-row"></div>`;
		group.links.forEach((itemLink) => card.querySelector(".link-row").append(anchor(itemLink)));
		return card;
	}));
}

function renderChecklist() {
	const saved = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
	const list = document.getElementById("checkList");
	list.replaceChildren(...checklist.map(([title, body], index) => {
		const label = document.createElement("label");
		label.className = "check-item";
		label.innerHTML = `<input type="checkbox"${saved[index] ? " checked" : ""}><div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></div>`;
		label.querySelector("input").addEventListener("change", (event) => {
			saved[index] = event.target.checked;
			localStorage.setItem(CHECK_KEY, JSON.stringify(saved));
		});
		return label;
	}));
}

function tagElement(text, alert) {
	const span = document.createElement("span");
	span.className = `tag${alert || text.includes("필요") || text.includes("확인") ? " alert" : ""}`;
	span.textContent = text;
	return span;
}

function anchor(itemLink) {
	const link = document.createElement("a");
	link.href = itemLink.href;
	link.textContent = itemLink.label;
	link.title = itemLink.title || itemLink.label;
	link.setAttribute("aria-label", itemLink.title || itemLink.label);
	link.target = "_blank";
	link.rel = "noreferrer";
	return link;
}

function official(label, href) {
	return linkItem("공식", label, href);
}

function map(query) {
	return linkItem("구글지도", query, `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`);
}

function search(query) {
	return linkItem("네이버검색", query, `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`);
}

function weatherLink(day) {
	const dateLabel = weatherDateLabel(day.label);
	return [
		{
			icon: "☁",
			label: "Windy 날씨",
			title: `${dateLabel} 푸꾸옥 Windy 날씨 보기`,
			href: "https://www.windy.com/10.289/103.984?10.289,103.984,10"
		},
		{
			icon: "☂",
			label: "Yr.no 날씨",
			title: `${dateLabel} 푸꾸옥 Yr.no 날씨 보기`,
			href: "https://www.yr.no/en/forecast/daily-table/2-12253704/Vietnam/An%20Giang/Ph%C3%BA%20Qu%E1%BB%91c%20District/Ph%C3%BA%20Qu%E1%BB%91c"
		}
	];
}

function weatherDateLabel(label) {
	const [month, date] = String(label).split("/");
	return `2026년 ${Number(month)}월 ${Number(date)}일`;
}

function linkItem(type, text, href) {
	const detail = String(text ?? "").trim();
	return {
		label: `${type}: ${detail}`,
		title: `${type} 링크 - ${detail}`,
		href
	};
}

function escapeHtml(value) {
	return String(value ?? "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[char]));
}
