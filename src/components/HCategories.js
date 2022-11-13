import React from 'react';
import styles from "./HCategories.module.css";

const HCategories = () => {

    return (
        <>
            <h3 className={styles.HC}>Clothes</h3>
            <div className={styles.container}>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/funny-mens-denim-collection-simple-doodle-style_292879-445.jpg?w=900'/>
                    <h4 class="text-center text-light pt-3">Pants</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/two-cotton-coats-wear-icons_603843-2542.jpg?w=1380&t=st=1667300775~exp=1667301375~hmac=9ce51cbd9f17018c0c47924d2bedba2911f4302b3affd920af7c1835a7634d3f'/>
                    <h4 class="text-center text-light pt-3">Shirts</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/swimsuit-men-set-cartoon-vector-illustration_87720-7920.jpg?w=740'/>
                    <h4 class="text-center text-light pt-3">Under Wear</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/vector-set-realistic-red-black-green-blue-baseball-caps-front-view-isolated-white-background_1284-45494.jpg?w=826&t=st=1667301576~exp=1667302176~hmac=c3a87b52b1ef340dae60b04812792614c597430998103384b5ebe1066d100eac'/>
                    <h4 class="text-center text-light pt-3">Caps</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/illustration-blue-sneaker_9620-300.jpg?size=338&ext=jpg    '/>
                    <h4 class="text-center text-light pt-3">Shoes</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/vintage-traditional-emirate-lady-jewelry-flat-icon_651154-1077.jpg?w=740'/>
                    <h4 class="text-center text-light pt-3">Accessory</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/vector-smart-watch_53876-25691.jpg?w=740&t=st=1667302161~exp=1667302761~hmac=202572f94ab6aff28afa12c7ea645856a3b05c252dd8fd285d2c4b6eeadd204a'/>
                    <h4 class="text-center text-light pt-3">Watch</h4>
                </button>
            </div>

            <h3>Electronics</h3>
            <div className={styles.container}>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/headphones-listen-music-dj-audio-headset_107791-12548.jpg?w=1380&t=st=1667299865~exp=1667300465~hmac=5cc4506d4a99a001e775d577add64236fcf1f61cd4bb9370716e0d85e4fb18a9'/>
                    <h4 class="text-center text-light pt-3">Headset</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/illustration-movie-watching-home-entertainment-concept-cartoon-illustration_74855-14558.jpg?w=1380&t=st=1667300130~exp=1667300730~hmac=12b26efb2d47c066df0f022e7df9500148ab9955a8a8ae9fc5ff350616bd6e51'/>
                    <h4 class="text-center text-light pt-3">TV / Monitor</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/camera-accessory_1284-13130.jpg?w=826&t=st=1667300232~exp=1667300832~hmac=b5e8795b34a76918fbff4109986cc3cca4715143a805eb18865b104d1fce637f'/>
                    <h4 class="text-center text-light pt-3">Camera</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1667293079~exp=1667293679~hmac=3cacd0518b621939604d200eac878ec29d83b3729a3c7cd2dd796d81adf91ad2'/>
                    <h4 class="text-center text-light pt-3">Phone</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/modern-office-desk-with-flat-design_23-2147900413.jpg?w=740&t=st=1667293211~exp=1667293811~hmac=2cc70613cea93420bf01083fa59f9f7a83d5b877f4a7a962e6dfd135505f34f3'/>
                    <h4 class="text-center text-light pt-3">PC / Laptop</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-photo/close-up-speaker-membrane-black-background-with-colored-lighting_169016-14352.jpg?w=1380&t=st=1667300547~exp=1667301147~hmac=2522dcfc29e34a152adc006729a67fadbe7d7d8baf08108d90a114a4d05ef878'/>
                    <h4 class="text-center text-light pt-3">Speaker</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/futuristic-background-computer-gamer_23-2148207098.jpg?w=740&t=st=1667300706~exp=1667301306~hmac=f674b57df26cff7affe435334693ca068b1600ca4d44c481c98b46c469e9ba55'/>
                    <h4 class="text-center text-light pt-3">Game console</h4>
                </button>
            </div>

            <h3>Home Appliances</h3>
            <div className={styles.container}>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/realistic-washing-machine-with-fresh-clean-folded-clothing-laundry-basket-with-dirty-cloth_208581-1649.jpg?w=740'/>
                    <h4 class="text-center text-light pt-3">Washing machine</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/fridge-background-design_1284-565.jpg?w=740&t=st=1667303286~exp=1667303886~hmac=d8f613e99aa3eef53e6bc8665da9a1720c01fbe107089fdc74a13d3a9fb012af'/>
                    <h4 class="text-center text-light pt-3">Refrigerator</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg'/>
                    <h4 class="text-center text-light pt-3">Sofa</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/young-couple-have-dinner-dining-room-cartoon-character_1150-63808.jpg?size=626&ext=jpg&uid=R14630001&ga=GA1.2.683976831.1667046021&semt=sph'/>
                    <h4 class="text-center text-light pt-3">Dining table</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/soft-striped-floor-rug-cartoon-wool-carpet_81894-6950.jpg?size=626&ext=jpg&uid=R14630001&ga=GA1.2.683976831.1667046021&semt=sph'/>
                    <h4 class="text-center text-light pt-3">Carpet</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/composition-realistic-detergent-bottles-shelf-with-bathroom-toilet-mirror-cleaners-with-wall-tiles-vector-illustration_1284-20459.jpg?size=626&ext=jpg&uid=R14630001&ga=GA1.2.683976831.1667046021&semt=sph'/>
                    <h4 class="text-center text-light pt-3">Washer</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/lightbulb-icon-with-sparkle-yellow-backround-ideas-creative-thinking-sign-symbol-design-concept-3d-vector-illustration_38364-169.jpg?size=626&ext=jpg&uid=R14630001&ga=GA1.2.683976831.1667046021&semt=sph'/>
                    <h4 class="text-center text-light pt-3">Lights</h4>
                </button>
            </div>

            <h3>Beauty / health</h3>
            <div className={styles.container2}>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/waterproof-makeup-concept-illustration_114360-7754.jpg?w=900&t=st=1667451827~exp=1667452427~hmac=46cd096f62b44c1891b653e7ad36cda819f4fa1fc300c3d78cd2410efba6534f'/>
                    <h4 class="text-center text-light pt-3">Cosmetic</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/surface-cleaning-equipment-illustration_23-2148528536.jpg?w=900&t=st=1667452485~exp=1667453085~hmac=c35c70957c6c6bf3d04691d07b56a53404ce062bd2ac90115e8e2c8f6fe7bdc7'/>
                    <h4 class="text-center text-light pt-3">Hygiene supplies</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/vector-set-barbershop-attribute-elements-supplies_487809-16.jpg?w=900'/>
                    <h4 class="text-center text-light pt-3">Personal stuff</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/bottle-with-heart-shaped-pink-liquid-love-potion-valentines-day-cards-vector-illustration_1284-46142.jpg?w=900&t=st=1667452942~exp=1667453542~hmac=ab3d5f5340550bfb5874a9ae5b81f85d30e80403e35be16aa0cb9791747a868c'/>
                    <h4 class="text-center text-light pt-3">perfume</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/first-aid-kit-isolated-white-background_183981-7.jpg?w=900'/>
                    <h4 class="text-center text-light pt-3">Health supplies</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/floating-books-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4013.jpg?w=900&t=st=1667453634~exp=1667454234~hmac=17424126fdd47a7d1de8a2ba4fd7ac3491440e49b4d7a2cace2d6a3828a1affe'/>
                    <h4 class="text-center text-light pt-3">Books</h4>
                </button>
            </div>

            <h3>Entertainment / Tools</h3>
            <div className={styles.container}>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/floating-books-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4013.jpg?w=900&t=st=1667453634~exp=1667454234~hmac=17424126fdd47a7d1de8a2ba4fd7ac3491440e49b4d7a2cace2d6a3828a1affe'/>
                    <h4 class="text-center text-light pt-3">Books</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/back-school-supplies-frame-background_24908-56951.jpg?w=900&t=st=1667453727~exp=1667454327~hmac=3d2ba9fe752c9b5649ce5f1cb329b94714290979bd47730fbac9fd779abb416b'/>
                    <h4 class="text-center text-light pt-3">Stationery</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/movie-film-reel-filmstrip-roll-monochrome-vector-illustration_421321-352.jpg?w=900'/>
                    <h4 class="text-center text-light pt-3">Films / Documentaries</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-photo/piano-keyboard-closeup-red-background-3d-rendering_476612-16463.jpg?size=338&ext=jpg'/>
                    <h4 class="text-center text-light pt-3">Musical Instruments</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/computer-games-development-abstract-concept-illustration_335657-3692.jpg?w=900&t=st=1667454881~exp=1667455481~hmac=13729ace8f98b290da7e09361b1cbfc8a4f4877331a91c0edfb0614b829f334a'/>
                    <h4 class="text-center text-light pt-3">Games / Software</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/premium-vector/knitted-basket-with-yarn-balls-knitting-needles-flat-vector-illustration_343924-241.jpg?w=900'/>
                    <h4 class="text-center text-light pt-3">Handicrafts</h4>
                </button>
                <button className={styles.card}>
                    <img style={{borderRadius: "50%"}} width={200} height={200} alt="categories" src='https://img.freepik.com/free-vector/diy-tool-background_23-2147573233.jpg?w=900&t=st=1667454614~exp=1667455214~hmac=97e36009ea412ebca238ad9e944cf8c9a30b5f026b878cfcdbae62d29a279623'/>
                    <h4 class="text-center text-light pt-3">Paint / Tools</h4>
                </button>
            </div>

        </>
            
    );
};

export default HCategories;
