# 푸꾸옥 여행 가이드

참가자 공유용 정적 웹앱입니다. 모바일 브라우저에서 일자별 일정, 전체 시간표, 장소/예약 링크, 출발 전 체크리스트를 볼 수 있습니다.

## 실행

```powershell
cd D:\07_Cursor\00_project\local_private_test\travel_guide
python -m http.server 8011
```

PC에서 확인:

```text
http://127.0.0.1:8011/
```

휴대폰에서 확인:

```text
http://PC_IP:8011/
```

## GitHub Pages 배포

저장소 루트에 아래 파일들이 있으면 바로 배포할 수 있습니다.

- `index.html`
- `styles.css`
- `app.js`

원본 캡처 이미지 없이도 앱이 동작하도록 일정 내용을 `app.js`에 구조화했습니다.

GitHub 저장소에 push한 뒤 `Settings > Pages`에서 `Deploy from a branch`, `main`, `/root`를 선택하면 됩니다.

## 데이터

일정과 링크 데이터는 `app.js` 안의 `days`, `linkGroups`, `checklist` 상수에 들어 있습니다. 체크리스트 완료 상태만 브라우저 `localStorage`에 저장됩니다.
