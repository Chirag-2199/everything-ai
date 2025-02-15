// pages/about.js
import Layout from '../components/layout';

const Docs = () => {
    return (
        <Layout>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                            Docs
                        </h1>
                        <div className="mt-8 max-w-2xl mx-auto text-lg text-gray-600">
                            <p className="mb-4">
                                We are dedicated to providing innovative solutions that make a difference.
                                Our team of experts is committed to excellence in every aspect of our work.
                            </p>
                            <p>
                                With years of experience and a passion for technology, we deliver
                                results that exceed expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Docs;