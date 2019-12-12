#!/bin/bash
# install deps
npm i
npm i react-redux redux prop-types

# modify index.js
curl https://gist.githubusercontent.com/andypagdin/a7f6cd112cfdfd53f68b66533c7f0063/raw -o ../src/index.js

# make reducers
mkdir ../src/reducers
curl https://gist.githubusercontent.com/andypagdin/ed62f5ef61b5b0989ca02a2b0af6de73/raw -o ../src/reducers/root-reducer.js
curl https://gist.githubusercontent.com/andypagdin/5ac6488f9bb673bb13a85c3f8daddef4/raw -o ../src/reducers/counter.js

# make actions
mkdir ../src/actions
curl https://gist.githubusercontent.com/andypagdin/8d1195716e1f68a796d72cbc2e613c99/raw -o ../src/actions/counter.js

# make components
curl https://gist.githubusercontent.com/andypagdin/48e26d0dc3bd7c54ce4a416386e64e32/raw -o ../src/components/counter.js
curl https://gist.githubusercontent.com/andypagdin/6835ce00e3b2d7db1e19c1a9baee6a5e/raw -o ../src/components/home.js
