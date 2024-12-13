import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{ y: [30, 55, 30] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        src='https://i.ibb.co.com/yXLW4vh/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-m.jpg'
                        className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-primary border-b-4 border-l-4 shadow-2xl" />
                    <motion.img
                        animate={{ x: [150, 180, 150] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        src='https://i.ibb.co.com/nrgynwt/business-people-teamwork-1.jpg'
                        className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-primary border-b-4 border-l-4 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 1,
                            ease: 'easeIn',
                            delay: 1,
                            repeat: Infinity,
                        }}
                        className="text-5xl font-bold">Find <motion.span
                            animate={{ color: ['#000000', "#3f00e7"] }}
                            transition={{
                                duration: 1,

                                delay: 1,
                                repeat: Infinity
                            }}
                        >Latest</motion.span> Jobs!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;