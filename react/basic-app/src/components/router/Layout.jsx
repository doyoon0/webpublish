import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return(
        <div>
            <header>
                <Link to="/login">로그인</Link>  {/* AppRouter의 Route path와 동일해야함*/}
                <Link to="/signup">회원가입</Link>
            </header>
            <div>
                <Outlet />
                <Outlet />
            </div>
        </div>
    );
}