import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ForBangla = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold text-center mb-3 ">Policy with Bangla</h1>
            <div data-aos="zoom-in-left"
                data-aos-delay="50"
                data-aos-duration="1000">
                <div className="collapse collapse-plus bg-[#1a1622] my-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-[#EEF4FA]">
                        Policy Number 1
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#EEF4FA]">
                            ১। আমরা আমাদের সকল সদস্যদের মধ্যে অংশীদারিত্বের অনুভূতি প্রতিষ্ঠা করতে প্রতিশ্রুতিবন্ধ।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1a1622] my-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-[#EEF4FA]">
                        Policy Number 2
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#EEF4FA]">
                            ২। আমারা মান এবং নতুনত্ব নিশ্চিত করে তৈরি  পোশাক খাতে নেতৃস্থানীয় অবস্থান অর্জন করতে প্রতিশ্রুতিবন্ধ।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1a1622] my-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-[#EEF4FA]">
                        Policy Number 3
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#EEF4FA]">
                            ৩। আমরা আমাদের পণ্যের মান ও নিবেদিত সেবা প্রদাণের মাধ্যমে গ্রাহক সন্তুষ্টি নিশ্চিত করতে প্রতিশ্রুতিবন্ধ।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1a1622] my-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-[#EEF4FA]">
                        Policy Number 4
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#EEF4FA]">
                            ৪। আমরা আই এস ও ৯০০১:২০১৫ বাস্তবায়ন করে আমাদের গুনগত লক্ষ্য অর্জন নিশ্চিত করব।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1a1622] my-1">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-[#EEF4FA]">
                        Policy Number 5
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#EEF4FA]">
                            ৫। প্রতিষ্ঠানের উত্তরোত্তর উন্নয়ন নিশ্চিত করতে নির্দিষ্ট সময় পর পর আনাদের সকল কার্যপদ্ধতি পর্যালোচনা করে যুগপোযোগী করব।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForBangla;