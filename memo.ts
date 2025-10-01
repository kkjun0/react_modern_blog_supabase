// Supabase
// 데이터베이스의 '테이블(table)'로 관리해야 함
// 로그인 -> 로그인에 대한 정보 -> 내가 관리하는 데이터베이스의 테이블로 넣어야 함.
// Next Step
// 소셜 로그인을 하면 자동으로 profiles 테이블에 로그인한 사용자의 정보가 들어가게 할 것
// Filters
// .eq('column', 'Equal to') -> 컬럼값이 같은지 검사
// .gt('column', 'Greater than') -> 컬럼값이 특정 값보다 큰지 검사
// .lt('column', 'Less than') -> 컬럼값이 특정 값보다 작은지 검사
// .gte('column', 'Greater than or equal to') -> 컬럼값이 특정 값보다 크거나 같은지 검사
// .lte('column', 'Less than or equal to') -> 컬럼값이 특정 값보다 작거나 같은지 검사
// .like('column', '%CaseSensitive%') -> 컬럼값이 특정 값이 포함되어 있는지 검사(대소문자를 구분)
// .ilike('column', '%CaseInsensitive%') -> 컬럼값이 특정 값이 포함되어 있는지 검사(대소문자를 구분하지 않음)
// .is('column', null) -> 컬럼의 값이 NULL인지 검사
// .in('column', ['Array', 'Values']) -> 배열 안의 있는 값이 하나라도 컬럼 값과 매칭되는지 검사
// .neq('column', 'Not equal to') -> 특정 값과 같지 않은지 검사
