const techIcons = [
  { name: "Apache Cordova", src: "/icons/apachecordova.svg" },
  { name: "C++", src: "/icons/cplusplus.svg" },
  { name: "Cloudflare", src: "/icons/cloudflare.svg" },
  { name: "Dell", src: "/icons/dell.svg" },
  { name: "TPLink", src: "/icons/tplink.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: ".NET", src: "/icons/dotnet.svg" },
  { name: "Elasticsearch", src: "/icons/elasticsearch.svg" },
  { name: "Plesk", src: "/icons/plesk.svg" },
  { name: "Fortinet", src: "/icons/fortinet.svg" },
  { name: "Git for Windows", src: "/icons/gitforwindows.svg" },
  { name: "GitHub", src: "/icons/github.svg" },
  { name: "Google Cloud", src: "/icons/googlecloudstorage.svg" },
  { name: "Grafana", src: "/icons/grafana.svg" },
  { name: "Duplicati", src: "/icons/duplicati.svg" },
  { name: "HTML5", src: "/icons/html5.svg" },
  { name: "Typescript", src: "/icons/typescript.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "Linux", src: "/icons/linux.svg" },
  { name: "MariaDB", src: "/icons/mariadbfoundation.svg" },
  { name: "Huawei", src: "/icons/huawei.svg" },
  { name: "Graylog", src: "/icons/graylog.svg" },
  { name: "MySQL", src: "/icons/mysql.svg" },
  { name: "Next.js", src: "/icons/nextdotjs.svg" },
  { name: "n8n", src: "/icons/n8n.svg" },
  { name: "NGINX", src: "/icons/nginx.svg" },
  { name: "Debian", src: "/icons/debian.svg" },
  { name: "PHP", src: "/icons/php.svg" },
  { name: "FreeNAS", src: "/icons/freenas.svg" },
  { name: "pfSense", src: "/icons/pfsense.svg" },
  { name: "phpMyAdmin", src: "/icons/phpmyadmin.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "CentOS", src: "/icons/centos.svg" },
  { name: "Elastic", src: "/icons/elastic.svg" },
  { name: "LetsEncrypt", src: "/icons/letsencrypt.svg" },
  { name: "Prometheus", src: "/icons/prometheus.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "HP", src: "/icons/hp.svg" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
  { name: "Ubiquiti", src: "/icons/ubiquiti.svg" },
  { name: "Veeam", src: "/icons/veeam.svg" },
  { name: "RedHat", src: "/icons/redhat.svg" },
  { name: "Cisco", src: "/icons/cisco.svg" },
  { name: "Vite", src: "/icons/vite.svg" },
  { name: "XAMPP", src: "/icons/xampp.svg" },
  { name: "Proxmox", src: "/icons/proxmox.svg" },
  { name: "Zendesk", src: "/icons/zendesk.svg" }
];

function IconRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex gap-12 items-center shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {techIcons.map((icon) => (
        <li key={icon.name} className="w-28 sm:w-32 md:w-36 flex flex-col items-center">
          <img
            src={icon.src}
            alt={icon.name}
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="
              h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
              object-contain opacity-90 hover:opacity-100
              transition-transform duration-300 hover:scale-110
            "
          />
          <span className="mt-2 text-[10px] sm:text-xs text-gray-800 text-center">
            {icon.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TechCarousel() {
  return (
    <section className="py-12 bg-purple-100 border-t border-purple-200 overflow-hidden">
      {/* se quiser um roxo custom: bg-[#E6D8FF] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Tecnologias que usamos
        </h3>

        <div
          className="
            relative overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
          aria-label="Carrossel de tecnologias em rolagem contínua"
        >
          {/* trilho com 2 grupos idênticos -> loop perfeito */}
          <div className="flex w-max animate-marquee">
            <IconRow />
            <IconRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
