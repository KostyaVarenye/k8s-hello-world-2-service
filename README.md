# k8s-hello-world-2-service
config files for two services for kubernetes cluster and the custom docker image

created simple web app with express with two access points: / and /nginx with nginx resolution through the web-app using custom simple docker image and nginx official docker image

- run with minikube `minikube start --vm-driver hyperv`
- then activate deployments with `kubectl apply -f k8s-hello-world-to-nginx.yaml -f nginx.yaml`
- after deployment use minikube to create a connection to the pod with our simple web-app `minikube service k8s-hello-world-to-nginx`
- lastly, when the page is loaded add to url `/nginx` to see our connection from one service to the other.
