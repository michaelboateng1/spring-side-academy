// import { supabase } from '$lib/supabaseClient';
// import { redirect } from '@sveltejs/kit';

// function getUserSession(){
//     supabase.auth.onAuthStateChange((_event, session) => {
//         console.log(session?.user);
//     });
// }

// export async function handle({ event, resolve }) {

// 	// if (event.url.pathname === '/dashboard') {
//     //     if(getUserSession()) return redirect(302, "/dashboard")
//     //     else return redirect(302, "/dashboard-login");
// 	// }

// 	const response = await resolve(event);
// 	return response;
// }