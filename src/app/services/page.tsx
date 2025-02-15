// pages/services.js
import Layout from '../components/layout';

const ServicesPage = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Custom web solutions built with modern technologies'
        },
        {
            title: 'Mobile Apps',
            description: 'Cross-platform mobile applications for iOS and Android'
        },
        {
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment'
        }
    ];

    return (
        <Layout>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Our Services
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ServicesPage;