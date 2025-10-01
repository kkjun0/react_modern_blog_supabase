# Git

Git 설정하고 초기화 하기

1. git init (git 초기화)
2. git config --list (git 환경설정)
3. git config --local user.name "git계정"
4. git config --local user.email "git이메일"
5. git config --global init.defaultBranch main (한 번 했으면 할 필요 없음, 또는 잘 되면 할 필요 없음)
6. git add -A 또는 git add . 또는 git add 파일명
   1. Working Directory(작업 디렉토리)
      1. 실제로 파일을 수정하는 곳
      2. 파일은 수정되었지만, git add를 하지 않아서 스테이징 영역에는 없는 상태를 의미함
   2. Staging Area(스테이징 영역, 인덱스)
      1. 커밋(commit)할 변경 사항을 잠시 올려두는 대기 공간.
      2. git add 명령어로 스테이징 영역에 파일을 옮길 수 있다.
   3. Repository(저장소, .git)
      1. 최종적으로 git commit 하면, 스테이징 영역에 있는 파일(폴더)가 git에 기록됨
      2. feat: 새로운 기능 추가
      3. fix: 버그 수정
      4. docs: 문서 수정
      5. style: 코드 스타일 변경(추가)
      6. refactor: 리팩토링
      7. test: 테스트 코드 추가
      8. chore: 빌드 설정 변경
      9. git commit -m "fix: 로그인시 빈 값을 입력해도 로그인 되던 현상 수정"
      10. git commit -m "feat: 로그아웃 기능 추가"
7. git config --global core.editor "code --wait"
8. git config --global --unset core.editor
9. git status
10. git log
    1. git log --oneline
    2. git log --graph
    3. 추천: git log --graph --oneline
11. 커밋 취소하는 방법(Repository -> working directory or staging area)
    1. 커밋이 한 개 있을 때
       1. 그냥 git을 다시 초기화 해라 (rm -rf .git -> git init -> git add . -> git commit)
    2. 커밋이 두 개 이상 있을 때
       1. git reset
          1. git reset --mixed HEAD~숫자
          2. git reset --mixed HEAD~1 (커밋 1개를 되돌아감)
          3. git reset --mixed HEAD~2 (커밋 2개를 되돌아감)
             1. --mixed : 기본값, 커밋 취소 + 작업 내역 Working Directory 영역에 배치
             2. --soft: 커밋 취소 + 작업 내역을 Staging Area에 배치
             3. --hard: 커밋 취소 + 작업 내역 삭제
       2. 만약에 소스코드가 github 올라갔으면 reset 하면 안됨
          1. git revert 커밋아이디
          2. 가장 많이 하는 실수 -> github에 올라갔는데 git reset을 하고 git push --force
          3. 작업내역을 취소한 새로운 커밋을 올렸으니까 병합해서 사용하세요.
12. github에 소스를 올릴 때
    1. git push -u origin 브랜치명
    2. --force
13. git === github 같다.
    1. github 올라가면 git으로 관리되지 않는 것
    2. github 원격 저장소
    3. git 로컬 저장소
14. 원격 저장소를 등록
    1. git remote add 식별자 원격레포주소
    2. git remote add origin 원격레포주소
    3. git remote add stream 원격레포주소
    4. git remote -v
15. git push
    1. git push -u 원격레포식별자 브랜치이름
    2. origin -> 원격레포식별자
    3. main -> 규칙
    4. git push -u origin main
       1. permission 에러
          1. remote 등록 주소가 잘못되지 않았는지 확인
          2. vscode에 연결된 git 계정과 내가 올리려고 하는 github 계정이 일치하는지 확인
          3. 팀 프로젝트일 때는 초대가 안된 것일 수도 있음
16. git branch(가지)
    1. 하나의 저장소 안에서 독립적으로 작업할 수 있는 개발 라인을 말합니다.
    2. git checkout -b 브랜치명
    3. git switch -c 브랜치명 (2.22, 2.24)
    4. git branch -v
       1. 기능: feature/기능명
       2. 버그: fix/버그명
       3. 긴급 수정: hotfix/긴급수정명
       4. 문서: docs/문서명
       5. 설정/빌드: chore/설정빌드명
       6. 리팩토링: refactor/리팩토리명
    5. 로그인 기능
       1. git switch -c feature/social-login
    6. 참고: main 브랜치는 절대로 개발하지 않는다.
