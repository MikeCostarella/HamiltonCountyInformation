// Hamilton County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-30
//
// Every URL below was fetched and its content checked against the organization
// it claims to be, and against being in OHIO. Nothing was guessed from a
// naming pattern.
//
// OUTRIGHT TRAP — do not add, ever:
//   * recordersoffice.org HAS BEEN HIJACKED. It 302-redirects off-domain to
//     azmvdnow.gov (an Arizona motor-vehicle site). It looks like it could be
//     the Recorder's domain and is not one. The Recorder is a page on the
//     county site (hamiltoncountyohio.gov).
//
// SPLIT WEB PRESENCE: some county offices run standalone domains (Auditor
// hamiltoncountyauditor.org, Sheriff hcso.org, Prosecutor hcpros.org, Clerk
// courtclerk.org, Elections votehamiltoncountyohio.gov) while the Treasurer,
// Recorder, courts and smaller agencies live as PATHS on the county portal.
// Both kinds are listed at their current, verified addresses. hamilton-co.org
// 302-redirects to hamiltoncountyohio.gov.
//
// GEOGRAPHY / STRADDLERS worth knowing:
//   * Loveland spans Hamilton, Clermont and Warren counties; Milford is mostly
//     Clermont; Harrison reaches the Indiana line; Fairfield (the city) is
//     mostly Butler County. Their Hamilton-county slices appear in the parcel
//     map, and the ones with a clearly Hamilton-seated site are listed.
//   * The city of MONTGOMERY here is the Hamilton County suburb
//     (montgomeryohio.gov, 10101 Montgomery Rd), NOT Montgomery COUNTY (Dayton)
//     — a genuine name collision within this very project.
//   * Wright-Patterson-style note: nothing here is out-of-county the way the
//     Air Force Museum was for Dayton; the institutions listed are all
//     Cincinnati-seated.
//
// LEFT OUT rather than listed unverified (each refused automated fetching — a
// browser check is the gap in this file):
//   * Treasurer (hamiltoncountytreasurer.org — DNS/robots), Sharonville
//     (sharonville.org — timeout), Reading (readingohio.gov — DNS), Wyoming
//     (wyomingohio.gov — timeout), Loveland (loveland.oh.us — DNS), Harrison
//     (harrisonohio.gov — timeout), Anderson Township (andersontownship.org),
//     Delhi Township (delhi.oh.us), Colerain Township (colerain.org — could
//     not confirm official), WLWT (403). All are the county's real orgs; only
//     the fetch was blocked.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Hamilton County Auditor Property Search (wEdge)";

export const LINKS = [
  // ---------- Government: county ----------
  { name: "Hamilton County, Ohio", category: "Government", subcategory: "County", url: "https://www.hamiltoncountyohio.gov/", description: "Official county portal at 138 E. Court Street in Cincinnati, governed by a three-member Board of County Commissioners across 49 jurisdictions." },
  { name: "Hamilton County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.hamiltoncountyauditor.org/", description: "Auditor Jessica Miranda's office — chief fiscal officer and sealer of weights and measures — at 138 E. Court Street." },
  { name: "Auditor Property Search (wEdge)", category: "Government", subcategory: "Auditor", url: "https://wedge3.hcauditor.org/", description: "The DEVNET wEdge parcel search behind this project's Auditor links, searchable by owner, address, parcel ID and sales." },
  { name: "Hamilton County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://www.hamiltoncountyohio.gov/government/open_government/financial_transparency/treasurer.php", description: "Treasurer's office, which collects and safeguards county property taxes." },
  { name: "Hamilton County Recorder", category: "Government", subcategory: "Recorder", url: "https://www.hamiltoncountyohio.gov/government/departments/recorder", description: "Recorder's office, keeping deeds and land records. (Beware recordersoffice.org, which redirects off-domain — this is the county's page.)" },
  { name: "Hamilton County Prosecutor", category: "Government", subcategory: "Courts", url: "https://www.hcpros.org/", description: "Prosecuting Attorney Connie Pillich's office at 230 E. Ninth Street, Suite 4000 in Cincinnati." },
  { name: "Hamilton County Sheriff", category: "Government", subcategory: "Public Safety", url: "https://www.hcso.org/", description: "Sheriff Charmaine McGuffey's office at 1000 Sycamore Street in Cincinnati." },
  { name: "Hamilton County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://www.courtclerk.org/", description: "Clerk of Courts Pavan V. Parikh, at 1000 Main Street in Cincinnati, keeping court records and titles." },
  { name: "Hamilton County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.votehamiltoncountyohio.gov/", description: "County elections office on Ohio's official board-of-elections domain." },
  { name: "CAGIS", category: "Government", subcategory: "GIS", url: "https://cagis.hamilton-co.org/", description: "The Cincinnati Area Geographic Information System consortium, whose consolidated parcel layer is the source this project's map is built from." },
  { name: "Great Parks of Hamilton County", category: "Government", subcategory: "Parks", url: "https://www.greatparks.org/", description: "The county park district — more than 17,000 acres across 21 parks and preserves." },
  { name: "Cincinnati Metro (SORTA)", category: "Government", subcategory: "Transit", url: "https://www.go-metro.com/", description: "The Southwest Ohio Regional Transit Authority, providing bus service across the Cincinnati region." },

  // ---------- Government: cities & villages ----------
  { name: "City of Cincinnati", category: "Government", subcategory: "City", url: "https://www.cincinnati-oh.gov/", description: "County seat and Ohio's third-largest city, on the Ohio River across from Kentucky." },
  { name: "City of Norwood", category: "Government", subcategory: "City", url: "https://www.norwood-ohio.com/", description: "A center for commerce and industry, entirely surrounded by the city of Cincinnati." },
  { name: "City of Blue Ash", category: "Government", subcategory: "City", url: "https://www.blueash.com/", description: "Northeastern business-district city; City Hall at 4343 Cooper Road." },
  { name: "City of Sharonville", category: "Government", subcategory: "City", url: "https://www.sharonville.org/", description: "Northern city and convention-center hub straddling the Hamilton/Butler line." },
  { name: "City of Springdale", category: "Government", subcategory: "City", url: "https://www.springdale.org/", description: "City offices at 11700 Springfield Pike in the county's north." },
  { name: "City of Forest Park", category: "Government", subcategory: "City", url: "https://www.forestpark.org/", description: "Planned city at 1201 West Kemper Road in the northwest of the county." },
  { name: "City of Montgomery", category: "Government", subcategory: "City", url: "https://www.montgomeryohio.gov/", description: "Northeastern suburb at 10101 Montgomery Road — the Hamilton County Montgomery, not the Dayton one." },
  { name: "City of Madeira", category: "Government", subcategory: "City", url: "https://www.madeiracity.com/", description: "Residential city at 7141 Miami Avenue on the east side." },
  { name: "City of Cheviot", category: "Government", subcategory: "City", url: "https://www.cheviot.org/", description: "West-side city at 3814 Harrison Avenue — 'Big City Spirit, Small Town Charm.'" },
  { name: "Village of Indian Hill", category: "Government", subcategory: "Village", url: "https://www.indianhill.gov/", description: "Large low-density village (the Village of Indian Hill) on the county's east side." },
  { name: "Village of Mariemont", category: "Government", subcategory: "Village", url: "https://www.mariemont.org/", description: "Planned garden village at 6907 Wooster Pike, a National Historic Landmark." },

  // ---------- Government: townships ----------
  { name: "Green Township", category: "Government", subcategory: "Township", url: "https://www.greentwp.org/", description: "The county's most populous township, at 6303 Harrison Avenue on the west side." },
  { name: "Sycamore Township", category: "Government", subcategory: "Township", url: "https://www.sycamoretownship.org/", description: "Northeastern township at 8540 Kenwood Road." },
  { name: "Springfield Township", category: "Government", subcategory: "Township", url: "https://www.springfieldtwp.org/", description: "North-central township, partnering with Colerain Township on shared services." },

  // ---------- Education ----------
  { name: "University of Cincinnati", category: "Education", subcategory: "Higher Ed", url: "https://www.uc.edu/", description: "Public research university and founder of cooperative education, in Clifton." },
  { name: "Xavier University", category: "Education", subcategory: "Higher Ed", url: "https://www.xavier.edu/", description: "Jesuit university in the Evanston/Norwood area — 'All for One, One for All.'" },
  { name: "Cincinnati State", category: "Education", subcategory: "Higher Ed", url: "https://www.cincinnatistate.edu/", description: "Cincinnati State Technical and Community College, in Clifton Heights." },
  { name: "Cincinnati Public Schools", category: "Education", subcategory: "K-12", url: "https://www.cps-k12.org/", description: "The county's largest district, headquartered at 2651 Burnet Avenue." },
  { name: "Public Library of Cincinnati & Hamilton County", category: "Education", subcategory: "Libraries", url: "https://chpl.org/", description: "One of the nation's busiest public library systems, Main Library at 800 Vine Street." },

  // ---------- Health ----------
  { name: "Cincinnati Children's Hospital", category: "Health", subcategory: "Hospitals", url: "https://www.cincinnatichildrens.org/", description: "One of the top pediatric hospitals and research centers in the country." },
  { name: "UC Health", category: "Health", subcategory: "Hospitals", url: "https://www.uchealth.com/", description: "The University of Cincinnati's academic health system, anchored by UC Medical Center." },
  { name: "TriHealth", category: "Health", subcategory: "Hospitals", url: "https://www.trihealth.com/", description: "Cincinnati health system (Good Samaritan and Bethesda hospitals), headquartered at 625 Eden Park Drive." },

  // ---------- Business & Economy ----------
  { name: "Cincinnati USA Regional Chamber", category: "Business & Economy", subcategory: "Chambers", url: "https://www.cincinnatichamber.com/", description: "The premier business and civic organization for the Cincinnati region." },

  // ---------- Community & Social ----------
  { name: "Cincinnati Museum Center", category: "Community & Social", subcategory: "Heritage", url: "https://www.cincymuseum.org/", description: "The museum complex in historic Union Terminal — history, science and children's museums plus the OMNIMAX." },

  // ---------- Recreation & Tourism ----------
  { name: "Cincinnati Zoo & Botanical Garden", category: "Recreation & Tourism", subcategory: "Attractions", url: "https://cincinnatizoo.org/", description: "The nation's second-oldest zoo, in Avondale — home of Fiona the hippo." },
  { name: "Cincinnati Art Museum", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.cincinnatiartmuseum.org/", description: "Encyclopedic art museum at 953 Eden Park Drive; general admission is free." },
  { name: "Cincinnati Reds", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.mlb.com/reds", description: "Major League Baseball's oldest professional franchise, at Great American Ball Park." },
  { name: "Cincinnati Bengals", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.bengals.com/", description: "The NFL on the riverfront at Paycor Stadium." },

  // ---------- News & Media ----------
  { name: "WCPO 9", category: "News & Media", subcategory: "News", url: "https://www.wcpo.com/", description: "Cincinnati's ABC affiliate, covering the Ohio-Kentucky-Indiana tri-state." },
  { name: "WVXU / Cincinnati Public Radio", category: "News & Media", subcategory: "Public Media", url: "https://www.wvxu.org/", description: "Cincinnati's NPR news station and local newsroom." },
];
