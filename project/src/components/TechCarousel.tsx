const techIcons = [
  { name: "Apache Cordova", src: "/icons/apachecordova.svg" },
  { name: "C++", src: "/icons/cplusplus.svg" },
  { name: "Dell", src: "/icons/dell.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "DotNet", src: "/icons/dotnet.svg" },
  { name: "Elasticsearch", src: "/icons/elasticsearch.svg" },
  { name: "Fortinet", src: "/icons/fortinet.svg" },
  { name: "Git for Windows", src: "/icons/gitforwindows.svg" },
  { name: "GitHub", src: "/icons/github.svg" },
  { name: "Google Cloud", src: "/icons/googlecloudstorage.svg" },
  { name: "Grafana", src: "/icons/grafana.svg" },
  { name: "HP", src: "/icons/hp.svg" },
  { name: "HTML5", src: "/icons/html5.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "Linux", src: "/icons/linux.svg" },
  { name: "MariaDB", src: "/icons/mariadbfoundation.svg" },
  { name: "MongoDB", src: "/icons/mysql.svg" }, // corrigido para seu MySQL local
  { name: "Next.js", src: "/icons/nextdotjs.svg" },
  { name: "n8n", src: "/icons/n8n.svg" },
  { name: "NGINX", src: "/icons/nginx.svg" },
  { name: "PHP", src: "/icons/php.svg" },
  { name: "pfSense", src: "/icons/pfsense.svg" },
  { name: "phpMyAdmin", src: "/icons/phpmyadmin.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "Prometheus", src: "/icons/prometheus.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
  { name: "Ubiquiti", src: "/icons/ubiquiti.svg" },
  { name: "Veeam", src: "/icons/veeam.svg" },
  { name: "Vite", src: "/icons/vite.svg" },
  { name: "XAMPP", src: "/icons/xampp.svg" },
  { name: "Zendesk", src: "/icons/zendesk.svg" }
];

export default function TechCarousel() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Tecnologias que usamos
        </h3>

        <div className="whitespace-nowrap animate-scroll flex items-center gap-12 px-4">
          {techIcons.concat(techIcons).map((icon, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center w-24">
              <img
                src={icon.src}
                alt={icon.name}
                className="w-12 h-12 object-contain mb-2 drop-shadow"
              />
              <span className="text-xs text-gray-500 text-center">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
