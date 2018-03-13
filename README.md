```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="/img/icon.png" type="image/png"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin Panel</title>

    <!-- Styles -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <link href="{{ mix('/css/admin/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Admin = {!! json_encode([
            'csrfToken' => csrf_token(),
            'stripeKey' => config('services.stripe.key'),
        ]) !!};
    </script>
</head>
<body>
    <div id="vulmadmin">
        <nav class="navbar is-dark">
            <div class="navbar-brand">
                <a class="navbar-item" href="{{ route('admin.home') }}">
                    <img src="/img/logo-nav.svg" alt="Admin Backoffice" height="28">
                </a>
                <div class="navbar-burger burger" data-target="adminMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="adminMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="{{ route('home') }}">
                        Back To Website
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="#">
                            {{ auth()->user()->name }}
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="columns is-gapless">
            <div class="column is-2">
                <aside class="menu vulmadmin-side-menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <li>
                            <a class="is-active" href="{{ route('admin.home') }}">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a>
                                Customers
                            </a>
                        </li>
                    </ul>
                    <p class="menu-label">
                        Administration
                    </p>
                    <ul class="menu-list">
                        <li>
                            <a href="{{ route('admin.genre.index') }}">
                                <span class="icon"><i class="fas fa-music"></i></span>
                                <span>Genres</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('admin.theme.index') }}">
                                <span class="icon"><i class="fas fa-paint-brush"></i></span>
                                <span>Themes</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                @include('partials.errors')
                @include('partials.flash')
                @yield('content')
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ mix('/js/admin/app.js') }}"></script>
</body>
</html>
```
