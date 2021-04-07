PDBe-KB Ping Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-ping-resources.svg?branch=master)](https://www.travis-ci.com/PDBe-KB/component-ping-resources)
[![codecov](https://codecov.io/gh/PDBe-KB/component-ping-resources/branch/master/graph/badge.svg?token=GLYUFFF6QX)](https://codecov.io/gh/PDBe-KB/component-ping-resources)
[![Maintainability](https://api.codeclimate.com/v1/badges/cf98b84b88b21a3e6fb5/maintainability)](https://codeclimate.com/github/PDBe-KB/component-ping-resources/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that makes GET requests to specified URLs. 

This web component is used on the PDBe-KB Aggregated Views of Proteins to generate web traffic for PDBe-KB partner resources who have contributed annotations for a particular protein of interest.

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-ping-resources.git
cd component-ping-resources
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The pinging component can be added to any Angular v6 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PingComponent } from './ping/ping.component';

@NgModule({
  declarations: [
    AppComponent,
    PingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2.) Add the component to a template:
Adding the pinging component to a template:
```angular2html
<app-ping [pingUrlData]=""></app-ping>
```

The data model for the input data is described in 
`src/app/ping/ping.models.ts`

##### Example input data

```angular2html
[
  {
    "resourceName": "3Dcomplex",
    "url": "https://shmoo.weizmann.ac.il/elevy/3dcomplexV6/Home.cgi"
  }
]
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-ping-resources/tags).

## Authors

* **Nurul Nadzirin** - *Initial implementation* - [nurulnad](https://github.com/nurulnad)
* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-ping-resources/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
