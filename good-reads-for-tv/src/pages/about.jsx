export const AboutUs = () => {
    return (
        <div class="container my-24 mx-auto md:px-6 grid grid-cols-2">
            <section class="mb-32 float-left">
                <h1 class="mb-4 text-3xl font-bold">Who are we?</h1>
                <p class="mb-6">Worth a Watch is a site dedicated to allowing people to share in their love of episodic TV shows! Wether through old media or streaming, we want people to be able to look up information on their favorite shows as well as share comment and review them.
                </p>
                <p class="mb-6 flex items-center font-bold uppercase text-danger">We think every show is Worth a Watch!</p>
                {/* <p>We think every show is Worth a Watch!</p> */}

                <h1 class="mb-4 text-3xl font-bold">Mission</h1>
                <p class="mb-6">Help people find and share information on their favorite TV shows</p>

                <h1 class="mb-4 text-3xl font-bold">Services</h1>
                <p class="mb-6">
                    <ul class="mb-6 list-inside list-disc">
                        <li>Track what shows you are watching</li>
                        <li>Find Information on Shows</li>
                        <li>Review shows</li>
                    </ul>
                </p>
            </section>
            <section>
                <img src='src\assets\images\coupleWatchingTVShows-Small.jpg' class="object-contain md:object-scale-down"></img>
                <p>Image by <a href="https://www.freepik.com/free-vector/people-watching-movie-home_8510741.htm#query=watch%20tv&position=3&from_view=search&track=ais">Freepik</a></p>
            </section>
        </div>
    )
}

export default AboutUs