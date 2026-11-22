import React, { useState } from 'react';
import './Benefit.css';

const benefitsTabs = [
  {
    id: 'tutors',
    label: 'Experienced Tutors',
    icon: 'star',
    heading: 'Only practicing tutors',
    text: 'Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.',
    illustration: 'tutors',
  },
  {
    id: 'feedback',
    label: 'Feedback & Support',
    icon: 'thumb',
    heading: 'Personal feedback & support',
    text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida. Morbi euismod adipiscing vestibulum diam, gravida amet, sed nunc. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum.',
    illustration: 'feedback',
  },
  {
    id: 'library',
    label: '24/7 Online Library',
    icon: 'library',
    heading: 'Access to 24/7 online library',
    text: 'Amet enim, nisi tempus vehicula. Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nulla nisl accumsan, id dignissim massa ut amet.',
    illustration: 'library',
  },
  {
    id: 'community',
    label: 'Community',
    icon: 'community',
    heading: 'Active student community',
    text: 'Convallis proin dignissim lacus, purus gravida. Morbi euismod adipiscing vestibulum diam, gravida amet, sed nunc. Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Nulla nisl accumsan, id dignissim massa ut amet.',
    illustration: 'community',
  },
];

const TabIcon = ({ type }) => {
  if (type === 'star') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1.8L9.85 5.55L14 6.15L11 9.07L11.71 13.2L8 11.25L4.29 13.2L5 9.07L2 6.15L6.15 5.55L8 1.8Z"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'thumb') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M5.5 7.2L7.7 2.5C8 1.9 8.9 2 9.1 2.7L9.6 5.8H12.8C13.6 5.8 14.1 6.6 13.9 7.3L12.7 12.1C12.5 12.7 12 13.2 11.3 13.2H5.5M5.5 7.2V13.2M5.5 7.2H3.3C2.7 7.2 2.2 7.7 2.2 8.3V12.1C2.2 12.7 2.7 13.2 3.3 13.2H5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'library') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.5 4.8L8 2.5L13.5 4.8L8 7.1L2.5 4.8Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 8L8 10.3L13.5 8"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 11.2L8 13.5L13.5 11.2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 11.2L2 13.5L4.6 12.6C5.6 13.1 6.8 13.4 8 13.4C11.6 13.4 14 11.1 14 8.2C14 5.3 11.6 3 8 3C4.4 3 2 5.3 2 8.2C2 9.4 2.4 10.4 3.2 11.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BenefitIllustration = ({ variant }) => {
  return (
    <svg
      className="benefit-illustration"
      viewBox="0 0 600 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Practicing tutors mentoring students"
    >
      {/* Pastki stol ostidagi yashil pol soya */}
      <polygon points="95,296 505,296 530,305 70,305" fill="#D5EFE3" />

      {/* Stol oyoqlari va ramkasi */}
      <line x1="125" y1="186" x2="88" y2="296" stroke="#9CC5F8" strokeWidth="1.8" />
      <line x1="475" y1="186" x2="512" y2="296" stroke="#9CC5F8" strokeWidth="1.8" />
      <rect x="115" y="182" width="370" height="5" rx="2" fill="#E8EEF5" stroke="#9CC5F8" strokeWidth="1.4" />
      <line x1="150" y1="187" x2="150" y2="232" stroke="#DCE5F0" strokeWidth="1.5" />
      <line x1="450" y1="187" x2="450" y2="232" stroke="#DCE5F0" strokeWidth="1.5" />

      {/* Chap stul */}
      <line x1="175" y1="226" x2="164" y2="296" stroke="#85B8F6" strokeWidth="1.8" />
      <line x1="238" y1="226" x2="249" y2="296" stroke="#85B8F6" strokeWidth="1.8" />
      <rect x="168" y="220" width="76" height="6" rx="3" fill="#FFF6CC" stroke="#E9C46A" strokeWidth="1.2" />

      {/* O'ng stul */}
      <line x1="362" y1="226" x2="351" y2="296" stroke="#F4D35E" strokeWidth="1.8" />
      <line x1="425" y1="226" x2="436" y2="296" stroke="#F4D35E" strokeWidth="1.8" />
      <rect x="356" y="220" width="76" height="6" rx="3" fill="#FFF6CC" stroke="#E9C46A" strokeWidth="1.2" />

      {/* Noutbuk (ekrandagi ustoz) */}
      <g>
        <rect x="242" y="76" width="116" height="78" rx="6" fill="#FFFFFF" stroke="#78B2F5" strokeWidth="2.2" />
        <rect x="248" y="82" width="104" height="62" rx="3" fill="#EAF4FF" />
        {/* Brauzer nuqtalari */}
        <circle cx="256" cy="89" r="2.2" fill="#78B2F5" />
        <circle cx="263" cy="89" r="2.2" fill="#78B2F5" />
        <circle cx="270" cy="89" r="2.2" fill="#78B2F5" />
        {/* Ekrandagi mentor */}
        <circle cx="294" cy="108" r="10" fill="#F3B09A" />
        <path d="M284 105C284 99 290 96 296 97C301 98 304 102 304 106C301 104 298 103 294 103C290 103 287 104 284 105Z" fill="#5C3A58" />
        <path d="M273 144C275 129 283 121 294 121C305 121 313 129 315 144" fill="#FFD13B" />
        {/* Qog'oz / matn belgisi ekranda */}
        <rect x="318" y="96" width="24" height="28" rx="3" fill="#FFFFFF" stroke="#9CC5F8" strokeWidth="1.3" />
        <line x1="322" y1="103" x2="338" y2="103" stroke="#9CC5F8" strokeWidth="1.4" />
        <line x1="322" y1="108" x2="338" y2="108" stroke="#9CC5F8" strokeWidth="1.4" />
        <line x1="322" y1="113" x2="334" y2="113" stroke="#9CC5F8" strokeWidth="1.4" />
        {/* Noutbuk asosi */}
        <path d="M228 154H372L364 162H236L228 154Z" fill="#DCE9F9" stroke="#78B2F5" strokeWidth="1.6" />
        <rect x="288" y="156" width="24" height="3" rx="1.5" fill="#78B2F5" />
      </g>

      {/* Chapdagi o'quvchi */}
      <g>
        {/* Oyoqlar va poyabzal */}
        <path d="M188 226L182 284" stroke="#6F3846" strokeWidth="14" strokeLinecap="round" />
        <path d="M214 226L224 282" stroke="#6F3846" strokeWidth="14" strokeLinecap="round" />
        <path d="M168 286C168 281 174 278 182 278L192 286V294H168V286Z" fill="#FF4B3E" />
        <path d="M216 284C216 279 222 276 230 276L242 284V294H216V284Z" fill="#FF4B3E" />
        {/* Kombinezon va sariq futbolka */}
        <path d="M174 142C174 133 183 128 196 128C209 128 218 134 218 145V228H174V142Z" fill="#FF5A36" />
        <path d="M183 132C187 142 195 147 206 146L215 136L226 164L204 172L183 132Z" fill="#FFD43B" />
        {/* Qo'l */}
        <path d="M218 154L244 176L238 183L212 164" fill="#6F3846" />
        {/* Bosh va soch */}
        <circle cx="196" cy="108" r="17" fill="#6F3846" />
        <circle cx="213" cy="96" r="7.5" fill="#FFF1D0" />
        <path d="M181 104C181 94 189 89 198 89C205 89 211 93 212 99C206 97 198 98 190 104L181 104Z" fill="#FFF1D0" />
        {/* Qizil quloqchin */}
        <path d="M180 108C180 96 188 88 199 88" stroke="#FF3F3A" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="176" y="102" width="8" height="14" rx="4" fill="#FF3F3A" />
      </g>

      {/* O'ngdagi o'quvchi */}
      <g>
        {/* Oyoqlar va poyabzal */}
        <path d="M382 226L366 280" stroke="#2CA69A" strokeWidth="15" strokeLinecap="round" />
        <path d="M404 226L416 282" stroke="#228B80" strokeWidth="14" strokeLinecap="round" />
        <path d="M350 284L374 280L378 294H348L350 284Z" fill="#FFE66D" />
        <path d="M410 284L432 280L436 294H408L410 284Z" fill="#FFE66D" />
        {/* Nuqtali oq futbolka */}
        <path d="M372 138C372 130 381 125 393 125C406 125 415 132 415 144V228H372V138Z" fill="#FFFFFF" stroke="#E5E8ED" strokeWidth="1.2" />
        <circle cx="384" cy="144" r="2.2" fill="#FF7A45" />
        <circle cx="398" cy="140" r="2.2" fill="#FF7A45" />
        <circle cx="390" cy="156" r="2.2" fill="#FF7A45" />
        <circle cx="405" cy="158" r="2.2" fill="#FF7A45" />
        <circle cx="382" cy="172" r="2.2" fill="#FF7A45" />
        {/* Qo'l */}
        <path d="M376 146L345 174L352 181L382 156" fill="#E88D72" />
        {/* Bosh va sariq soch */}
        <circle cx="392" cy="106" r="16" fill="#E88D72" />
        <path d="M376 105C375 94 383 87 394 87C403 87 409 92 409 99C403 97 394 98 386 105L376 105Z" fill="#FFD43B" />
        <circle cx="404" cy="88" r="5" fill="#FFD43B" />
        {/* Qalam */}
        <line x1="348" y1="176" x2="336" y2="162" stroke="#FF3F3A" strokeWidth="2.8" strokeLinecap="round" />
      </g>

      {/* Stol ustidagi bloknot va stiker */}
      <rect x="206" y="170" width="32" height="12" rx="2" fill="#FFFFFF" stroke="#9CC5F8" strokeWidth="1.2" />
      <rect x="356" y="168" width="22" height="14" rx="2" fill="#FFE66D" />

      {/* Aktiv tabga ko'ra nozik urg'u */}
      {variant !== 'tutors' && (
        <circle cx="300" cy="42" r="5" fill="#FF3F3A" opacity="0.22" />
      )}
    </svg>
  );
};

const Benefit = () => {
  const [activeTab, setActiveTab] = useState('tutors');

  const currentBenefit =
    benefitsTabs.find((tab) => tab.id === activeTab) || benefitsTabs[0];

  return (
    <section className="benefit">
      <div className="container">
        <div className="benefit-container">
          {/* Yuqori sarlavha */}
          <div className="benefit-header">
            <span className="benefit-subtitle">OUR BENEFITS</span>
            <h2 className="benefit-title">That’s how we do it</h2>
          </div>

          {/* 4 ta tab tugmasi */}
          <div className="benefit-tabs" role="tablist" aria-label="Our benefits">
            {benefitsTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`benefit-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <TabIcon type={tab.icon} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Kontent va o'ng illyustratsiya */}
          <div className="benefit-content" key={currentBenefit.id}>
            <div className="benefit-info">
              <h3 className="benefit-info__title">{currentBenefit.heading}</h3>
              <p className="benefit-info__text">{currentBenefit.text}</p>
            </div>

            <div className="benefit-visual">
              <BenefitIllustration variant={currentBenefit.illustration} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;